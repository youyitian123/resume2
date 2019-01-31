<template>
	<article>
		<ul class="project-list">
			<li class="project-item">
				<div class="project-item-content">
					<h1>微信翻译小程序</h1>
					<p>
						Github地址:
						<a href="https://github.com/youyitian123/weixinFy-demo">weixinFy-demo</a>
					</p>
					<p>本项目是实现一款微信小程序翻译工具，支持中、英、法、韩、日、阿拉伯、西班牙语的翻译。该工具还能保存用户翻译记录以便之后查看。</p>
				</div>
			</li>

			<li class="project-item">
				<div class="project-item-content">
					<h1>Vue.js 技术栈搭建的CNODE社区</h1>
					<p>
						Github地址:
						<a href="https://github.com/youyitian123/Fcnode">Fcnode</a>
					</p>
					<p>本项目是利用cnode社区提供的API和vue框架，来高仿CNODE社区网站。</p>
				</div>
			</li>

			<li class="project-item">
				<div class="project-item-content">
					<h1>使用jQuery技术仿网易云音乐手机版</h1>
					<p>
						Github地址:
						<a href="https://github.com/youyitian123/weixinFy-demo">163-demo</a>
					</p>
					<p></p>
				</div>
			</li>
		</ul>
	</article>
</template>

<script></script>

<style lang="scss" scoped>
.project-list {
	.project-item {
		margin: 1rem auto;
		border-radius: 0.2rem;
		background: #ece9e9;
		height: auto;
		max-width: 85%;
		overflow: hidden;
		height: 50em;
		position: relative;
		.project-item-content {
			position: absolute;
			left: 3rem;
			top: 3rem;
			text-align: left;
			p {
				font-size: 0.8rem;
				color: #9e9d99;
				margin-top: 1em;
			}
			h1 {
				font-size: 1.5rem;
				color: #434240;
			}
		}
	}
}
</style>
