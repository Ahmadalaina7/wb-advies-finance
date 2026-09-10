<?php
/**
 * Contactformulier-endpoint voor Plesk/Cloud86.
 * Stuurt berichten rechtstreeks via de servermail naar contact@wbadviesfinance.nl.
 */
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

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
$data = json_decode($raw, true);
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

if (mb_strlen($name) < 2 || mb_strlen($name) > 100) {
    $errors[] = 'name';
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || mb_strlen($email) > 200) {
    $errors[] = 'email';
}
if ($phone !== '' && !preg_match('/^\+?[0-9\s\-]{8,15}$/', $phone)) {
    $errors[] = 'phone';
}
if (mb_strlen($message) < 10 || mb_strlen($message) > 2000) {
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

$encodedName = function_exists('mb_encode_mimeheader')
    ? mb_encode_mimeheader($name, 'UTF-8', 'B', "\r\n")
    : $name;

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    "From: WB Advies & Finance <{$from}>",
    "Reply-To: {$encodedName} <{$email}>",
    'X-Mailer: WB-Contact-Form',
];

$sent = @mail($to, '=?UTF-8?B?' . base64_encode($subjectLine) . '?=', $body, implode("\r\n", $headers));

if (!$sent) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'send_failed']);
    exit;
}

echo json_encode(['ok' => true]);
