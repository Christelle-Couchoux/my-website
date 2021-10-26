<!DOCTYPE html>
<html lang="fr">

<head>

    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="robots" content="index, follow">

    <title>Merci pour votre message - Christelle Couchoux</title>
    <meta name="title" content="Christelle Couchoux">
    <meta name="description" content="Christelle Couchoux, Développeuse Web Full-stack. 
    Merci pour votre message. Vous recevrez une réponse sous 24 heures.">
    <link rel=”alternate” hreflang="en" href="https://www.christelle-couchoux.com/en/contact"/>

    <link rel="icon" href="./favicon.ico"/>
    <link rel="stylesheet" type="text/css" href="./css/prefixed/style.css"/>

    <script src="https://kit.fontawesome.com/c508233717.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400&display=swap" rel="stylesheet">

    <!-- js scripts -->
    <script src="./js/scroll-to-top.js" defer></script>
    <script src="./js/nav-toggle.js" defer></script>
    <script src="./js/nav-fr.js" defer></script>

</head>

<body>
    <div class="bg">
        <div class="content">
            <div class="fixed-header>">
                <header class="page-header">
                    <?php include_once('./includes/logo-fr.php'); ?>

                    <div class="language">
                        <div class="language__choice">
                            <p class="language__active" title="Français">
                                FR
                            </p>
                        </div>
                        <div class="language__choice">
                            <a>
                                <p title="English">
                                    EN
                                </p>
                            </a>
                        </div>
                    </div>

                    <?php include_once('./includes/nav-pages-fr.php'); ?>             
                </header>
            </div>

            <main>
            <?php

            if($_POST) {

                $email_body = "<div>";

                if(isset($_POST['name'])) {
                    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
                    $email_body .= "<div>
                                        <label><b>Name:</b></label>&nbsp;<span>".$name."</span>
                                    </div>";
                }

                if(isset($_POST['email'])) {
                    $email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['email']);
                    $email = filter_var($email, FILTER_VALIDATE_EMAIL);
                    $email_body .= "<div>
                                        <label><b>Email:</b></label>&nbsp;<span>".$email."</span>
                                    </div>";
                }

                if(isset($_POST['message'])) {
                    $message = htmlspecialchars($_POST['message']);
                    $email_body .= "<div>
                                        <label><b>Message:</b></label>
                                        <div>".$message."</div>
                                    </div>";
                }

                $email_body .= "</div>";


                $to = "contact@christelle-couchoux.com";

                $subject = "Message via contact form at christelle-couchoux.com";

                $headers  = 'MIME-Version: 1.0' . "\r\n"
                .'Content-type: text/html; charset=utf-8' . "\r\n"
                .'From: ' . $email . "\r\n";


                if(mail($to, $subject, $email_body, $headers)) {
                    echo    "<div class=\"ty-contact\">
                                <p>Merci pour votre message, $name.<br>
                                Vous recevrez une réponse sous 24 heures.</p>
                            </div>";
                } else {
                    echo "<p>Désolée, votre message n'a pas pu être envoyé.</p>";
                }

            } else {
                echo '<p>Une erreur est survenue.</p>';
            }
            ?>
            </main>

            <?php include_once('./includes/footer-fr.php'); ?>

            <?php include_once('./includes/scroll-to-top-btn.php'); ?>
        </div>
    </div>
</body>

</html>
