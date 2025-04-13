import type Echo from "laravel-echo";
import type Pusher from "pusher-js";

// TypeScript declaration file for custom DOM elements and global variables
declare global {
  interface Window {
    Echo: Echo<object>;
    Pusher: Pusher;
  }
}