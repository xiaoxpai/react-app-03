/**
 *   嵌套动态路由访问
 *   http://localhost:3000/clients/[id]/[clientprojectid]
 *   http://localhost:3000/clients/max/project1
 *
 */
function selectedClientProject() {
  return (
    <div>
      <h1>指定用户的项目ID的页面</h1>
    </div>
  );
}
export default selectedClientProject;