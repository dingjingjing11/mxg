<template>
    <div class="login">
        <div class="login-container">
            <div class="title-container">
                <h2 class="title">梦学谷会员管理系统</h2>
            </div>
           
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">                
                    <el-form-item label="账号" prop="username">
                        <el-input  v-model.trim="ruleForm.username" >
                        </el-input>
                    </el-form-item>
                    
                    <el-form-item label="密码" prop="password">
                        <el-input v-model.trim="ruleForm.password">
                        </el-input>
                    </el-form-item>
                </el-form>
                <el-row>
                    <el-button type="primary" class="button"  @click="submit">登录</el-button>
                </el-row>
           
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            // ruleForm:{
            //     name: '',
            //     password:''
            // },
            ruleForm:{
                username:'',
                password:''
            },
            rules: {
                username: [{ required: true, message: '账号不能为空', trigger: 'blur' },
                           {min:3,max:12,message:'请输入3~12个字符',trigger:'blur'}
            ],
                password: [{ required: true, message: '密码不能为空', trigger: 'blur' },
            ]
            }

        }
    },

    methods: {
        //点击登录对整个表单效验
        
       async submit(){
           let res = await login({username:this.username,password:this.password})
           if(res.data.msg=='ok'){
           
                this.$router.push({path:'/'})

           }
        }
    }
};
</script>
<style lang='scss' scoped>
.login {
    width: 100%;
    height: 100%;
    background-color: rgb(19, 28, 48);
    background-size: 100%;
    overflow: hidden;
}

.login-container {
    background-color: #ebe6e6;
    position: relative;
    width: 450px;
    // height: 450px;
    // max-width: 100%;
    padding: 20px;
    margin:160px auto;
    overflow: hidden;
    color: #fff;
    border-radius: 5px;
}
.title{
    color: #000;
}
.title-container{
    text-align: center;
}

#app ,body,html{
    height: 100%;
    padding: 0;
    margin: 0;

}
.button{
   
    width: 60px;
    height: 40px;
    margin-left: 45px;
    text-align: center;
    // line-height: 40px;
}

.el-form-item__content{
    // width: 200px;
    height: 40px;
}
.el-form{
    margin-top: 20px;
    height: 144px;
}
.el-input{
    width: 300px;
}
.el-form-item{
    height: 40px;
    // background-color: #000;
    
}
.iconfont{
    position: absolute;
    top:10px;
    left:10px
}

    
</style>