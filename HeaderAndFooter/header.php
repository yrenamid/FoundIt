<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Header</title>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">



    <!-- TailwindCSS CDN -->
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>

<body>
    <!-- Navbar -->
    <nav class="bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <!-- Logo and Link to Landing Page -->
                <div class="flex items-center">
                    <a class="flex items-center" href="../index.php">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search h-8 w-8 text-blue-600">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </svg>
                        <span class="ml-2 text-xl font-bold text-gray-900">FoundIt</span>
                    </a>
                </div>

                <!-- Navigation Links (Hidden on mobile) -->
                <div class="hidden md:flex items-center space-x-4">
                    <div class="flex items-center space-x-4">
                        <a class="text-gray-700 hover:text-blue-600" href="../../Foundit/login-page/login.php">Login</a>
                        <a class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700" href="../../Foundit/signup-page/signup.php">Sign Up</a>
                    </div>
                </div>

                <!-- Mobile Menu Button -->
                <div class="md:hidden flex items-center">
                    <button class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600" id="menuButton">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu h-6 w-6">
                            <line x1="4" x2="20" y1="12" y2="12"></line>
                            <line x1="4" x2="20" y1="6" y2="6"></line>
                            <line x1="4" x2="20" y1="18" y2="18"></line>
                        </svg>
                    </button>

                    <!-- Mobile Close Button (Initially Hidden) -->
                    <div id="closeButton" class="md:hidden hidden">
                        <button class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x h-6 w-6">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
   
    <!-- Mobile Menu (Hidden by default) -->
    <div class="md:hidden hidden" id="mobileMenu">
        <div class="px-2 pt-2 pb-3 space-y-1">
            <div class="flex items-center space-x-4">
                <a class="text-gray-700 hover:text-blue-600" href="../../Foundit/login-page/login.php">Login</a>
                <a class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700" href="../../Foundit/signup-page/signup.php">Sign Up</a>
            </div>
        </div>
    </div>

    <script src = "../../Foundit/js/mobile-menu.js" defer></script>
</body>

</html>