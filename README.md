# Vuex ORM study

## Vue cliのインストールとVuex-ORMのインストール
```
vue create <プロジェクト名>
```
でプロジェクトを作成する。
babel,Vuex,Routerをインストール選択

```
npm install vuex-orm@core
```
これでvuex-ormが使えるようになる
*このリポジトリクローンするならおそらく不要*


## Vuex-ORMの設定
1. srcフォルダの下にmodelフォルダを作成する
```
mkdir ./src/model
```
  
2.任意のモデルを作成する（modelフォルダ下参照） 
  
3. srcフォルダのstore.js
作成したモデルを登録する行が必要
サンプルーこのリポジトリ内のstore.js
```javascript
import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import Project from './model/Project'
import Task from './model/Task'

Vue.use(Vuex)

const database = new VuexORM.Database()

database.register(Project)
database.register(Task)

const store = new Vuex.Store({
  plugins: [VuexORM.install(database)]
})

export default store
```

これでVuex-ORMが使えるようになった。
リファレンス等はKia King Ishii氏の[Vuex-ORMリポジトリ](https://github.com/vuex-orm/vuex-orm)や[Vuex-ORM exampleリポジトリ](https://github.com/vuex-orm/vuex-orm-examples)を参考に
