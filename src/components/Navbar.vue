<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" aria-label="Tenth navbar">
    <div class="container-fluid">
        <a class="navbar-brand mb-2 mb-lg-0 text-white text-decoration-none" href="/"><img src="../assets/images/chatbot.png" height="30"/>Chatbot</a>

        <button class="navbar-toggler text-white px-2 fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
            Menu <svg class="svg-inline--fa fa-bars fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 448 512" data-fa-i2svg>
                <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
            </svg>
        </button>

        <div class="collapse navbar-collapse justify-content-md-center" id="navbarMenu">
            <ul class="nav nav-pills col-12 col-lg-auto mb-2 justify-content-center mb-md-0 mx-lg-auto">
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'chatbot' }">Chatbot</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'compiler' }">Compiler</router-link>
                </li>
            </ul>
        </div>

        <!-- <div class="dropdown text-end">
            <a href="#" class="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown" aria-expanded="false">
                <img src="" alt="mdo" width="32" height="32" class="rounded-circle"> {{ username }}
            </a>
            <ul class="dropdown-menu text-small dropdown-menu-end">
                <li><a class="dropdown-item" href="">Profile</a></li>
                <li><a class="dropdown-item" href="">Settings</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="">Sign out</a></li>
            </ul>
        </div> -->
    </div>
</nav>
</template>

<script setup>
</script>