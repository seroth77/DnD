import { inject, bindable } from 'aurelia-framework';
import { TaskQueue } from 'aurelia-task-queue';
import $ from 'jquery';

@inject(TaskQueue)
export class ClassHealthDisplay {
  @bindable healthData;

  constructor(taskQueue) {
    this.taskQueue = taskQueue;
  }

  healthDataChanged() {
    this.bars = [];
    console.log(this.healthData);
    if (this.healthData !== undefined) {
      this.taskQueue.queueTask(() => {
        for (let propertyName in this.healthData.core) {
          let progressWidget = $('.' + propertyName + '-coreStat')[0].au['ak-progress-bar'].viewModel.kWidget;
          progressWidget.progressStatus.text(this.healthData.core[propertyName]);
          progressWidget.progressWrapper.css({'background-color': '#FF0000'});
        }
      });
    }
  }
}
