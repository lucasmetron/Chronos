let instance: TimerWorkerManager | null = null;

export class TimerWorkerManager {
  private worker: Worker;

  private constructor() {
    this.worker = new Worker(new URL('./timerWorker.js', import.meta.url));
  }

  static getInstance(): TimerWorkerManager {
    if (!instance) {
      instance = new TimerWorkerManager();
    }
    return instance;
  }

  postMesage(message: string | number) {
    this.worker.postMessage(message);
  }

  onmessage(cb: (event: MessageEvent) => void) {
    this.worker.onmessage = cb;
  }

  terminateWorker() {
    this.worker.terminate();
    instance = null;
  }
}
