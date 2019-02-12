<template>
  <article class="about" id="about">
    <div class="inner-item">
      <div class="item">
        <h1 class="item-title hello">关于</h1>
        <div class="item-desc">
          <ul class="item-desc-list">
            <li>一个前端开发学习者，最近在寻找一份前端开发的工作，如果你看到我的简历觉得不错，可以通过下面的联系方式来联系我。</li>
            <li></li>
          </ul>
        </div>
      </div>

      <div class="item">
        <h1 class="item-title">联系</h1>
        <div class="item-desc">
          <ul class="item-desc-list">
            <li>
              <strong class="point">fengjc_sleep@163.com</strong>
              <span>E-MAIL</span>
            </li>
            <li>
              <strong class="point">1698927XXXX</strong>
              <span>电话</span>
            </li>
            <li>
              <strong>
                <a href="https://github.com/youyitian123" class="point" target="_blank">youyitian123</a>
              </strong>
              <span>Github</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="item">
        <h1 class="item-title">技能</h1>
        <div class="item-desc">
          <ul class="item-desc-list">
            <li>Vue</li>
            <li>HTML5,CSS3,JavaScript</li>
            <li>jQuery</li>
            <li>移动端开发</li>
            <li>HTTP</li>
            <li>
              <strong class="point">其他</strong>
              <span>webpack,Chai,karma,parcel,Scss...</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.point::after {
  content: " · ";
}

.point {
  color: #333;
  text-decoration: underline;
}

.hello {
  position: relative;
}
.hello::after {
  position: absolute;
  content: "Hello";
  display: block;
  padding: 0.3rem;
  height: 1.5rem;
  font-size: 0.9rem;
  text-align: center;
  line-height: 1.5rem;
  background: orange;
  top: 0px;
  left: 5rem;
  border-radius: 0.3rem;
}

.hello::before {
  position: absolute;
  left: 4.6rem;
  top: 0.4rem;
  content: "";
  display: block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0.5rem 0.5rem 0.5rem 0;
  border-color: transparent orange transparent transparent;
}

.about {
  margin-top: 4.5rem;
  .inner-item {
    max-width: 70%;
    margin: 0 auto;
    width: 70vw;
    color: #666;
    .item {
      margin: 2rem 0;
      font-size: 0.875rem;
      display: flex;
      .item-title {
        width: 30%;
        font-size: 2.25rem;
        color: #333;
      }
      .item-desc {
        width: 70%;
        text-align: left;
        .item-desc-list {
          li {
            word-wrap: break-word;
            line-height: 2rem;
            span {
              font-size: 0.9rem;
            }
          }
        }
      }
    }
  }
}
</style>


<script>
export default {};
</script>


