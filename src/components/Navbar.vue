<template>
  <header>
    <nav
      class="px-8 py-10 md:px-10 md:py-12 flex justify-between items-center bg-transparent absolute w-screen z-10"
    >
      <div class="max-w-[115px] md:max-w-[150px] logo-container">
        <img
          class="max-w-[100%]"
          :src="swietoneHorizontalLogo"
          alt="swietone-main-logo"
        />
      </div>
      <div
        class="menu"
        tabindex="0"
        @click="$emit('toggleMenu', true)"
        @keypress="$emit('toggleMenu', true)"
      >
        <div class="menu-kebab">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import swietoneMainLogo from '../assets/svg/swietone-main-logo.svg'
import swietoneHorizontalLogo from '../assets/svg/swietone-horizontal-logo.svg'

export default {
  data () {
    return {
      swietoneMainLogo,
      swietoneHorizontalLogo
    }
  }
}
</script>

<style lang="scss">
.logo-container {
  animation: secondFade 1s ease-in;
}

@keyframes secondFade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.circle {
  width: 6px;
  height: 6px;
  margin: 3px;
  background: #ffcb77;
  border-radius: 50%;
  display: block;
}

.menu-kebab {
  flex-direction: column;
  position: relative;
  transition: all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  .circle:nth-child(4),
  .circle:nth-child(5) {
    position: absolute;
    opacity: 0;
    top: 50%;
    margin-top: -3px;
    left: 50%;
  }
  .circle:nth-child(4) {
    margin-left: -12px;
  }
  .circle:nth-child(5) {
    margin-left: 6px;
  }
  &:hover,
  &:focus {
    transform: rotate(45deg);
    .circle {
      opacity: 1;
    }
    cursor: pointer;
  }
}

.open-kebab {
  flex-direction: column;
  position: relative;
  transition: all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: rotate(45deg);

  .circle:nth-child(4),
  .circle:nth-child(5) {
    position: absolute;
    opacity: 1;
    top: 50%;
    margin-top: -3px;
    left: 50%;
  }
  .circle:nth-child(4) {
    margin-left: -12px;
  }
  .circle:nth-child(5) {
    margin-left: 6px;
  }
  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.1) rotate(45deg);
  }
}
</style>
