<template>
  <nav>
    <div class="header-nav" id="topNavBar">
      <div class="logo">
        <a href="#">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-idcard"></use>
          </svg>
        </a>
        <span class="header-name">
          <strong>冯锦成</strong> ,前端工程师
        </span>
      </div>

      <div class="tab-list">
        <a href>关于</a>
        <a href>项目</a>
        <a href>Github</a>
      </div>
    </div>
  </nav>
</template>

<script>
window.onscroll = function() {
  if (window.scrollY > 0) {
    topNavBar.classList.add("sticky");
  } else {
    topNavBar.classList.remove("sticky");
  }
};

export default {};
</script>


<style lang="scss" scoped>
nav {
  z-index: 1;
  position: fixed;
  top: 0;
  width: 100%;
  background: #ffffff;
  .header-nav {
    transition: all 0.3s;

    .logo {
      .icon {
        width: 1.5rem;
        height: 1.5rem;
        fill: #444;
        overflow: hidden;
        margin-right: 0.4rem;
      }

      display: flex;
      justify-content: center;
      align-items: center;

      .header-name {
        opacity: 0;
        color: #444;
        font-size: 0.9rem;
      }
    }
    padding: 0.7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    border-bottom: 1px solid #ddd;

    .tab-list {
      color: #666;
      font-size: 0.9rem;
    }
  }

  .header-nav.sticky {
    border-color: transparent;
    width: 100%;

    .header-name {
      opacity: 1;
    }
  }
}
</style>


