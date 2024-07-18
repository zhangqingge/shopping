<template>
    <div>
        <Breadcrumb></Breadcrumb>
        <div class="content">
            订单合同：<el-button @click="dialogVisible = true" >查看合同</el-button>
            <!-- PDF打印    查询关键词：vue实现PDF打印  -->
            <el-dialog title="查看合同内容" :visible.sync="dialogVisible" width="60%" :before-close="handleClose">
                <VuePdf></VuePdf>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
            </el-dialog>
        </div>
    </div>
</template>

<script>
import VuePdf from './VuePdf.vue'
// import print from 'print-js'
export default {
    components:{
        VuePdf,
    },
    data() {
        return {
            dialogVisible: false
        };
    },
    methods: {
        handleClose() {
            this.dialogVisible = false
            // this.$confirm('确认关闭？')
            //     .then(_ => {
            //         done();
            //     })
            //     .catch(_ => { });
        }
    }
};
</script>


<style scoped>
.content {
    background: #fff;
    padding: 20px;
}
</style>