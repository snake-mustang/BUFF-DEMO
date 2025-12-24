# 部署说明

## 构建命令

```bash
npm run build
```

## 部署配置

### 基础路径

项目配置了基础路径为 `/BUFF/`，适用于部署在子目录的场景。

**⚠️ 重要：需要同时配置 Vite 和 React Router**

#### 1. Vite 配置（处理静态资源路径）

在 `vite.config.ts` 中配置：

```typescript
export default defineConfig({
  base: '/BUFF/',  // 部署的子目录路径
  // ... 其他配置
})
```

这个配置会让所有静态资源（JS、CSS、图片等）自动加上 `/BUFF/` 前缀。

#### 2. React Router 配置（处理路由跳转）

在 `src/main.tsx` 中配置：

```typescript
<BrowserRouter basename="/BUFF">
  <App />
</BrowserRouter>
```

这个配置会让所有路由跳转都基于 `/BUFF` 路径。

**两者的区别：**
- `vite.config.ts` 的 `base`: 影响打包后的**静态资源路径**（HTML 中的 script、link 等标签）
- `BrowserRouter` 的 `basename`: 影响**运行时的路由导航**（Link 组件、useNavigate 等）

**必须同时配置这两个才能让应用在子目录下正常工作！**

### 部署目录结构

构建完成后，`dist` 目录的内容应该部署到服务器的 `/BUFF/` 路径下：

```
网站根目录/
└── BUFF/
    ├── index.html
    ├── favicon.svg
    └── assets/
        ├── index-xxx.js
        └── index-xxx.css
```

### 访问地址

- **开发环境**: http://localhost:8083/
- **生产环境**: https://yourdomain.com/BUFF/

## GitHub Pages 部署

如果要部署到 GitHub Pages，确保仓库设置中的 Pages 源指向 `main` 分支的 `dist` 目录（或使用 GitHub Actions）。

### 方法 1: 手动部署

1. 构建项目：
```bash
npm run build
```

2. 将 `dist` 目录内容推送到 `gh-pages` 分支

### 方法 2: 使用 GitHub Actions (推荐)

创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## 环境变量

如果需要为不同环境设置不同的基础路径，可以使用环境变量：

```typescript
// vite.config.ts
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/BUFF/',
  // ...
})
```

然后在构建时指定：

```bash
# 开发环境（根路径）
VITE_BASE_PATH=/ npm run dev

# 生产环境（子路径）
VITE_BASE_PATH=/BUFF/ npm run build
```

## 注意事项

1. **路由配置**: React Router 会自动使用 Vite 的 `base` 配置
2. **静态资源**: 所有静态资源（图片、字体等）都会自动加上基础路径前缀
3. **API 请求**: 如果有 API 请求，需要注意路径配置
4. **404 处理**: 单页应用需要配置服务器重定向规则

### Nginx 配置示例

```nginx
location /BUFF/ {
    alias /var/www/html/BUFF/;
    try_files $uri $uri/ /BUFF/index.html;
}
```

### Apache .htaccess 配置示例

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /BUFF/
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /BUFF/index.html [L]
</IfModule>
```

## 验证部署

部署完成后，访问以下 URL 验证：

- 首页: https://yourdomain.com/BUFF/
- 游戏详情: https://yourdomain.com/BUFF/top-up/genshin-impact
- 静态资源: https://yourdomain.com/BUFF/assets/index-xxx.js

确保所有资源都能正常加载，路由跳转正常工作。

