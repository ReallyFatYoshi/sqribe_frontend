import Pusher from "pusher-js";
import Echo from "laravel-echo";

export default defineNuxtPlugin(() => {
  Object.defineProperty(window, "Pusher", {
    value: Pusher,
    writable: true,
  });

  Object.defineProperty(window, "Echo", {
    value: new Echo({
      broadcaster: "reverb",
      key: import.meta.env.VITE_REVERB_APP_KEY,
      wsHost: import.meta.env.VITE_REVERB_HOST,
      wsPort: import.meta.env.VITE_REVERB_PORT ?? 80,
      wssPort: import.meta.env.VITE_REVERB_PORT ?? 443,
      forceTLS: (import.meta.env.VITE_REVERB_SCHEME ?? "https") === "https",
      enabledTransports: ["ws", "wss"],
    }),
    writable: true,
  });
});
