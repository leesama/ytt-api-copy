export class Dep {
  // 订阅池
  constructor(name) {
    this.id = new Date(); //这里简单的运用时间戳作订阅池的ID
    this.subs = []; //该事件下被订阅对象的集合
  }
  defined() {
    // 添加订阅者
    Dep.watch.add(this);
  }
  notify() {
    //通知订阅者有变化
    this.subs.forEach((e, i) => {
      if (typeof e.update === "function") {
        try {
          e.update.apply(e); //触发订阅者更新函数
        } catch (err) {
          console.warr(err);
        }
      }
    });
  }
}
Dep.watch = null;

export class Watch {
  constructor(name, fn) {
    this.name = name; //订阅消息的名称
    this.id = new Date(); //这里简单的运用时间戳作订阅者的ID
    this.callBack = fn; //订阅消息发送改变时->订阅者执行的回调函数
  }
  add(dep) {
    //将订阅者放入dep订阅池
    dep.subs.push(this);
  }
  update() {
    //将订阅者更新方法
    var cb = this.callBack; //赋值为了避免改变函数内调用的this
    cb(this.name);
  }
}
