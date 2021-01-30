/**
 * 验证中间件
 * @param {*} param0 
 */
export default function({ store, redirect }) {
    if (!store.state.user) {
        return redirect("/login");
    }
}
