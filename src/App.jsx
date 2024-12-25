import { AppRouter } from './routes/Router';
import { CartProvider } from './hooks/useCart';
import './App.css'

function App() {

  return (
    <CartProvider>
      <div className="App">
        <AppRouter />
      </div>
    </CartProvider>
  )
}

export default App
