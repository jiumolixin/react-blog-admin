import React, { lazy } from "react"
const Layout = lazy(() => import("@/layouts/ManageLayout"))
const Dashboard = lazy(() => import("@/pages/Dashboard"))

const CategoryManage = lazy(() => import("@/pages/Article/CategoryManage"))
const TagManage = lazy(() => import("@/pages/Article/TagManage"))
const ArticlePublish = lazy(() => import("@/pages/Article/ArticlePublish"))
const ArticleList = lazy(() => import("@/pages/Article/ArticleList"))
const Project = lazy(() => import("@/pages/Project"))

const Links = lazy(() => import("@/pages/FriendChain"))
const NotFound = lazy(() => import("@/pages/404"))
const Login = lazy(() => import("@/pages/Login"))
const Config = lazy(() => import("@/pages/Config"))

import { FileTextOutlined, GlobalOutlined } from "@ant-design/icons"
import { RouteItem } from "./types"
import Log from "@/pages/Log"
import { Navigate } from "react-router-dom"

const router: RouteItem[] = [
  {
    element: <Layout />,
    key: "/",
    path: "/",
    children: [
      {
        index: true,
        element: <Navigate to={"/dashboard"}></Navigate>,
        key: "/",
        path: "/"
      },
      {
        element: <Dashboard />,
        path: "dashboard",
        key: "/dashboard",
        icon: <GlobalOutlined />,
        label: "控制台"
      },
      {
        path: "/article",
        icon: <FileTextOutlined />,
        label: "文章管理",
        key: "/article",
        children: [
          {
            path: "article-publish/:id",
            element: <ArticlePublish />,
            key: "/article/article-publish/-1",
            icon: <FileTextOutlined />,
            label: "发布文章"
          },
          {
            path: "article-list",
            element: <ArticleList />,
            key: "/article/article-list",
            icon: <FileTextOutlined />,
            label: "文章列表"
          },
          {
            path: "tag-manage",
            element: <TagManage />,
            key: "/article/tag-manage",
            icon: <FileTextOutlined />,
            label: "标签管理"
          },
          {
            path: "category-manage",
            element: <CategoryManage />,
            key: "/article/category-manage",
            icon: <FileTextOutlined />,
            label: "分类管理"
          }
        ]
      },
      {
        path: "/project",
        icon: <FileTextOutlined />,
        label: "作品管理",
        key: "/project",
        element:<Project />
      },
      {
        element: <Links />,
        path: "/links",
        key: "/links",
        icon: <GlobalOutlined />,
        label: "友链"
      },
      {
        element: <Log />,
        path: "/log",
        key: "/log",
        icon: <GlobalOutlined />,
        label: "网站日志"
      },
      {
        element: <Config />,
        path: "/config/:id",
        key: "/config/1",
        icon: <GlobalOutlined />,
        label: "网站设置"
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
    key: "/login"
  },
  {
    path: "*",
    element: <NotFound />,
    key: "*"
  }
]
export default router
