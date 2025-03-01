class CommonHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="topnav">
        <a class="active" href="https://xiangqi.xyz">首页</a>
        <div class="dropdown">
          <button class="dropbtn" onclick="myFunction()">赛事报道
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content" id="myDropdown">
            <a href="https://xiangqi.xyz/赛事/2025/棋友杯2025.html">棋友杯2025</a>
          </div>
        </div>
        <a href="#activities">近期赛事</a>
        <a href="#ranking">麒麟榜</a>
        <a href="#livestream">直播室</a>
        <a href="#merchant">商品</a>
        <a href="#contact">联络我们</a>
        <a href="#about">关于我们</a>
      </div>
    `
  }
}

class CommonFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="footer">
        <p>麒麟象棋</p>
      </div>
    `
  }
}

customElements.define('common-header', CommonHeader)
customElements.define('common-footer', CommonFooter)
