<template>
  <!-- Navigation -->
  <nav id="mainNav" class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top py-0">
    <div class="container">
      <RouterLink class="navbar-brand d-flex align-items-center" to="/">
        <img src="../assets/images/chatbot_logo_web.png" width="40" height="40" alt="logo" />
      </RouterLink>

      <!-- Toggler -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Collapsible content -->
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav me-auto ms-2">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'chatbot' }">Chat</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'compiler' }">Compiler</router-link>
          </li>
        </ul>

        <!-- Dropdown как часть navbar -->
        <!-- <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="langDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-translate" viewBox="0 0 16 16">
                    <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z"></path>
                    <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31"></path>
                </svg>  
            </button>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="langDropdown">
                <li><a class="dropdown-item" href="/">Русский</a></li>
                <li><a class="dropdown-item" href="/">English</a></li>
                <li><a class="dropdown-item" href="/">中文</a></li>
            </ul>
          </li>
        </ul> -->
      </div>
    </div>
  </nav>
</template>

<script setup>
</script>