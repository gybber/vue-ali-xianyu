<template>
	<div class="content2" >
        <ul class="lists">
          <li class="list">
            <label class="detail">起拍价</label>
            <div class="price">0.00</div>
          </li>
          <li class="list">
            <label class="detail">保证金</label>
            <div class="price">0.00</div>
          </li>
          <li class="list">
            <label class="detail">加价幅度</label>
            <div class="price">0.00</div>
          </li>
          <li class="list">
            <label class="detail">开拍时间</label>
            <div class="price">请选择开拍时间</div>
          </li>
          <li class="list">
            <label class="detail">结束时间</label>
            <div class="price">请选择结束时间</div>
          </li>
          <li class="list">
            <label class="detail">分类</label>
            <div class="price">请选择分类</div>
          </li>
        </ul>

        <div class="bottom">
          <p class="info">把该宝贝同步到</p>
          <div class="yutang">
            <span class="big">鱼塘</span>
            <span class="little">:加入鱼塘，更多曝光</span>
          </div>
        </div>
      </div>
</template>
<style lang="css" scoped>
.content2 {
  width: 100%;
  display: block;
  padding: 1rem 1rem;
  box-sizing: border-box;
}
.list {
  display: -webkit-flex;
  display: flex;
  height: 4rem;
  align-items: center;
  font-size: 1.4rem;
  color: #000;
  font-weight: 500;
  border-bottom: 1px solid #f3f3f3;
  position: relative;
}
.list:last-child {
  border-bottom: none;
}
.list:after {
  content: '';
  display: inline-block;
  height: .8rem;
  width: .8rem;
  border-width: 2px 2px 0 0;
  border-color:#999;
  border-style: solid;
  transform: rotate(45deg);
  position: absolute;
  right: 1rem;
}
.detail {
  width: 8rem;
}
.price {
  margin-left: 1rem;
}
.bottom{
  width: 100%;
  height: 10rem;
  background-color: #f3f3f3;
  padding: 1rem 1rem;
  box-sizing: border-box;
}
.info{
  font-size: 1.2rem;
  color: #888;
  margin-bottom: 1rem;
}
.yutang {
  width: 20rem;
  height: 3rem;
  background-color: #fff;
  line-height: 3rem;
  text-align: center;
}
.yutang .big{
  color: #000;
}
.yutang .little {
  color: #888;
}
</style>