export interface IRouter {
  goBack():void;
  navigate(path: string): void;
  goToRootPage():void;
  goForward():void;
  getCurrentPath():string;
}
