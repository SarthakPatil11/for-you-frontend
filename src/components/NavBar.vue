<template>
    <div class="NavBar">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">ForYOU</a>
                <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> -->
                <!-- <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <slot></slot>
                    </ul>
                    <div class="d-flex">
                        <span class="chocolate px-3 py-1" id="chocolatect">0</span>
                        <a class="btn btn-warning loginbtn" href="#">Login</a>
                    </div>
                </div> -->
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style scoped>
.NavBar {
    position: sticky;
    top: 0px;
}

.navbar {
    z-index: 20;
    background-color: rgb(231, 231, 231) !important;
}

.navbar .navbar-brand {
    background-color: rgb(0, 179, 255);
    color: rgb(255, 211, 54);
    padding: 5px;
    border-radius: 10px;
    font-weight: 900;
    font-size: x-large;
}

.navbar .nav-item {
    font-size: larger;
}

.navbar .chocolate {
    margin-right: 20px;
    padding-left: 46px !important;
    font-size: x-large;
    color: rgb(168, 83, 57);
    border-radius: 30px;
    background-image: url(../assets/chocolate.png);
    background-size: 1.7rem;
    background-position: 15px;
    background-repeat: no-repeat;
    background-color: rgb(250, 183, 4);
    border: 1px solid rgb(223, 29, 69);
}

@keyframes shake {
    25% {
        background-position-y: 1px;
    }

    50% {
        background-position-y: 7px;
    }

    75% {
        background-position-y: 1px;
    }

    100% {
        background-position-y: 3.5px;
    }
}

.loginbtn {
    font-weight: 600;
    font-size: large;
    background-color: rgb(250, 183, 4);
    color: rgb(168, 83, 57);
}</style>