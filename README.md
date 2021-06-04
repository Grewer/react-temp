# react-temp

> 此库用来尝试 react 的各种库和方法的实现


## react 三方库

- unstated-next  api 小巧, 取代全局的通用存储没问题,  但是 local 的还是得用原生方案

- recoil  recoil分支, 原子性较强, 能布局全局 也能解决局部,但是有点散, 零散, 拼凑不容易, 项目人员一多就不好把握

- xstate xstate分支,  想实现还是需要很多知识点的, 不易于整体的协作, 除非每个人都会, 并且其中的拼装还有很多优化点, 一不小心就会造成冗余情况

- flooks flooks分支, 大体上简单,  但是有些 api 不好用, 比如 now,  还有 `useModel`, 需要 deps, 这样有时候 还不得不拆分
