<template>
  <SysDialog
    :title="dialog.title"
    :height="dialog.height"
    :width="dialog.width"
    :visible="dialog.visible"
    @onClose="onClose"
    @onConfirm="commit"
  >
    <template #content>
      <el-form
        :model="resetModel"
        ref="resetFormRef"
        :rules="rules"
        label-width="100px"
        size="default"
      >
        <el-form-item label="用户账户">
          <el-input v-model="resetModel.username" disabled />
        </el-form-item>

        <el-form-item prop="password" label="新密码">
          <el-input v-model="resetModel.password" type="password" show-password />
        </el-form-item>

        <el-form-item prop="confirmPassword" label="确认密码">
          <el-input v-model="resetModel.confirmPassword" type="password" show-password />
        </el-form-item>
      </el-form>
    </template>
  </SysDialog>
</template>

<script setup lang="ts">
import SysDialog from "@/components/SysDialog.vue";
import useDialog from "@/hooks/useDialog";
import { reactive, ref } from "vue";
import { ElMessage, type FormInstance } from "element-plus";
import { editApi } from "@/api/user"; // ✅ 直接复用编辑接口

// 弹窗控制
const { dialog, onClose, onShow } = useDialog();

// 表单 ref
const resetFormRef = ref<FormInstance>();

// 表单模型
const resetModel = reactive({
  userId: "",
  username: "",
  password: "",
  confirmPassword: "",
});

// 校验规则
const rules = reactive({
  password: [
    { required: true, message: "请输入新密码", trigger: "change" },
    { min: 6, message: "密码长度不能少于6位", trigger: "change" },
  ],
  confirmPassword: [
    { required: true, message: "请确认密码", trigger: "change" },
    {
      validator: (rule: any, value: string, callback: any) => {
        if (value !== resetModel.password) {
          callback(new Error("两次输入的密码不一致"));
        } else {
          callback();
        }
      },
      trigger: "change",
    },
  ],
});

// emit
const emits = defineEmits(["refresh"]);

// 打开弹窗
const show = (row: any) => {
  console.log('初始化弹窗', row.username);
  resetModel.userId = row.userId;
  resetModel.username = row.username;
  resetModel.password = "";
  resetModel.confirmPassword = "";
  dialog.title = "重置密码";
  dialog.height = 220;
  onShow();
};

// 提交
const commit = () => {
  resetFormRef.value?.validate(async (valid) => {
    if (valid) {
      const param = {
        userId: resetModel.userId,
        username: resetModel.username,
        password: resetModel.password, // ✅ 只传更新字段
      };
      const res = await editApi(param as any);
      if (res && res.code === 200) {
        ElMessage.success("密码重置成功");
        emits("refresh");
        onClose();
      }
    }
  });
};

// 暴露给父组件
defineExpose({ show });
</script>
