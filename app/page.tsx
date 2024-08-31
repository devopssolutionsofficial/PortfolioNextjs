import TransitionPage from "./components/TransitionPage";
import Introduction from "./components/Introduction";

export default function Home() {
  return (
    <main className="bg-darkBg">
      <TransitionPage />
      <div className="flex min-h-[100vh] h-full">
        <Introduction />
      </div>
    </main>
  );
}
