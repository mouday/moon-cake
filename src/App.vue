<template>
  <div class="app">
    <div class="canvas-warp">
      <canvas
        width="400"
        height="400"
        id="canvas"
      ></canvas>
    </div>

    <button
      style="margin-top: 20px"
      class="button"
      @click="handleExportClick"
    >
      制作月饼
    </button>
  </div>
</template>

<script>
// created at 2022-08-23
import { fabric } from 'fabric'
import FileSaver from 'file-saver'

export default {
  name: 'App',

  props: {},

  components: {},

  data() {
    return {
      canvas: null,
    }
  },

  computed: {},

  methods: {
    async getData() {},

    // 导出为图片
    handleExportClick() {
      let base64 = this.canvas.toDataURL('png')
      FileSaver.saveAs(base64, 'mooncake.png')

      // 输出 png 图片可能会打断 canvas 的渲染
      this.canvas.requestRenderAll()
    },
  },

  mounted() {
    const canvas = new fabric.Canvas('canvas', {
      preserveObjectStacking: true, // 被选中时保持原有层级
      // selection: false,
    })
    // canvas.selection = false

    // 绘制一个圆
    const circle = new fabric.Circle({
      // top: 100,
      // left: 100,
      radius: 100, // 圆的半径 50
      fill: 'rgb(250,201,81)',
    })

    canvas.add(circle)

    circle.viewportCenter()

    // 绘制月饼馅
    const text = new fabric.Textbox('五仁月饼', {
      fill: 'rgb(180,110,48)',
    })
    canvas.add(text)

    text.viewportCenter()

    this.canvas = canvas
    // console.log(canvas.getObjects())
  },

  created() {
    this.getData()
  },
}
</script>

<style lang="less"></style>

<style lang="less" scoped>
.app {
  text-align: center;
}

.canvas-warp {
  border: 1px solid #ccc;
  box-sizing: border-box;
}

#canvas {
  width: 100%;
  height: 100%;
}

/* 手机端隐藏效果*/
@media only screen and (max-width: 768px) {
  .app {
    padding: 0 8px;
  }

  .button {
    width: 80%;
    padding: 20px 0;
    font-size: 1.5rem;
  }

  .canvas-warp{
    padding: 10px;
  }
}
</style>
