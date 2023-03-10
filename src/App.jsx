import { Container } from "./components/container/container";
import { Header } from "./components/header/header";

export const App = () => {

  return (
    <> 
      <Header />
      <main>
        <nav>
          <Container yuri="Hortov" className="navigation__container"/>
        </nav>
        <section></section>
      </main>
      <footer></footer>
    </>
  )
}

