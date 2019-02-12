<template>
  <nav>
    <div class="header-nav" id="topNavBar" :class="{sticky}">
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
        <a href="#project-list">作品</a>
        <a href="#about">关于</a>
        <a href>Github</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      sticky: false
    };
  },
  mounted() {
    /**
     *  设置topNav动画
     */

    window.onscroll = () => {
      if (window.scrollY > 10) {
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    };

    /**
     * 利用TWEEN设置跳转动画
     */
    var aTags = document.querySelectorAll(".tab-list > a");
    function animate(time) {
      requestAnimationFrame(animate);
      TWEEN.update(time);
    }
    requestAnimationFrame(animate);

    for (let i = 0; i < aTags.length; i++) {
      aTags[i].onclick = function(x) {
        x.preventDefault();
        let a = x.currentTarget;
        let href = a.getAttribute("href");
        var stmp = href.slice(0, 1);

        if (stmp === "#") {
          let element = document.querySelector(href);
          let top = element.offsetTop;
          let currenTop = window.scrollY; //当前滚轮离顶部多少像素
          let targetTop = top - 80; // 移动到目标的像素

          let s = targetTop - currenTop;
          var t = Math.abs((s / 100) * 100);
          if (t < 400) {
            t = 400;
          }
          var coords = {
            y: currenTop
          };

          var tween = new TWEEN.Tween(coords)
            .to(
              {
                y: targetTop
              },
              t
            )
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(function() {
              window.scrollTo(0, coords.y);
            })
            .start();
        } else {
          window.open(href);
        }
      };
    }
  },
  
};
</script>


<style lang="scss" scoped>
nav {
  z-index: 99;
  position: fixed;
  top: 0;
  width: 100%;
  background: #ffffff;
  .header-nav {
    display: flex;
    padding: 0.7rem;
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    border-bottom: 1px solid #ddd;
    transition: all 0.3s;

    .logo {
      display: flex;
      justify-content: center;
      align-items: center;

      .icon {
        width: 1.5rem;
        height: 1.5rem;
        fill: #444;
        overflow: hidden;
        margin-right: 0.4rem;
      }

      .header-name {
        opacity: 0;
        color: #444;
        font-size: 0.9rem;
        margin-top: -0.2rem;
      }
    }

    .tab-list {
      position: relative;
      color: #666;
      font-size: 0.9rem;
      .submenu {
        display: none;
        position: absolute;
        left: 2.5rem;
      }
      a.active {
        .submenu {
          display: block;
        }
      }
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


