<template>
  <div class="app">
    <button
      class="button"
      @click="handleExportClick"
    >
      制作月饼
    </button>

    <div style="margin-top: 20px">
      <canvas
        width="400"
        height="400"
        id="canvas"
        style="border: 1px solid #ccc"
      ></canvas>
    </div>
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

<style lang="less" scoped></style>
