<?php
/**
 * Contactformulier-endpoint voor Plesk/Cloud86.
 * Stuurt berichten rechtstreeks via de servermail naar contact@wbadviesfinance.nl.
 */
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

function contact_len(string $value): int
{
    return function_exists('mb_strlen') ? mb_strlen($value, 'UTF-8') : strlen($value);
}

try {
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(204);
        exit;
    }

    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        http_response_code(405);
        echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
        exit;
    }

    $raw = file_get_contents('php://input');
    $data = json_decode($raw ?: '', true);
    if (!is_array($data)) {
        $data = $_POST;
    }

    // Honeypot: bots vullen dit, echte gebruikers niet.
    if (!empty($data['website'])) {
        echo json_encode(['ok' => true]);
        exit;
    }

    $name = trim((string) ($data['name'] ?? ''));
    $email = trim((string) ($data['email'] ?? ''));
    $phone = trim((string) ($data['phone'] ?? ''));
    $subject = trim((string) ($data['subject'] ?? ''));
    $message = trim((string) ($data['message'] ?? ''));
    $privacy = $data['privacy'] ?? false;

    $to = 'contact@wbadviesfinance.nl';
    $from = 'contact@wbadviesfinance.nl';

    $errors = [];

    if (contact_len($name) < 2 || contact_len($name) > 100) {
        $errors[] = 'name';
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL) || contact_len($email) > 200) {
        $errors[] = 'email';
    }
    if ($phone !== '' && !preg_match('/^\+?[0-9\s\-]{8,15}$/', $phone)) {
        $errors[] = 'phone';
    }
    if (contact_len($message) < 10 || contact_len($message) > 2000) {
        $errors[] = 'message';
    }
    if ($privacy !== true && $privacy !== 'true' && $privacy !== 1 && $privacy !== '1') {
        $errors[] = 'privacy';
    }

    if ($errors) {
        http_response_code(422);
        echo json_encode(['ok' => false, 'error' => 'validation', 'fields' => $errors]);
        exit;
    }

    $subjectLine = 'Nieuw contactbericht: ' . ($subject !== '' ? $subject : 'Algemeen');
    $subjectLine = str_replace(["\r", "\n"], '', $subjectLine);

    $body = "Nieuw bericht via het contactformulier op wbadviesfinance.nl\n\n"
        . "Naam: {$name}\n"
        . "E-mail: {$email}\n"
        . "Telefoon: " . ($phone !== '' ? $phone : 'Niet opgegeven') . "\n"
        . "Onderwerp: " . ($subject !== '' ? $subject : 'Algemeen') . "\n\n"
        . "Bericht:\n{$message}\n";

    $safeName = str_replace(["\r", "\n", '<', '>'], '', $name);
    $headers = [
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: 8bit',
        "From: WB Advies & Finance <{$from}>",
        "Reply-To: {$safeName} <{$email}>",
        'X-Mailer: WB-Contact-Form',
    ];

    $encodedSubject = '=?UTF-8?B?' . base64_encode($subjectLine) . '?=';
    $sent = @mail($to, $encodedSubject, $body, implode("\r\n", $headers), '-f' . $from);

    if (!$sent) {
        http_response_code(500);
        echo json_encode(['ok' => false, 'error' => 'send_failed']);
        exit;
    }

    echo json_encode(['ok' => true]);
} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'server_error']);
}
