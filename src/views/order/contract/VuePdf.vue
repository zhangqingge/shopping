<template>
    <div>
        <el-button @click="printHandle">打印</el-button>
        <print src="/sxt.pdf" ref="myPdf"></print>
    </div>
</template>

<script>
import print from 'print-js';
export default {
    components: {
        print,
    },
    methods: {
        //打印PDF
        printHandle() {
            this.$refs.myPdf.print();
        }
    }


}
</script>

<style></style>