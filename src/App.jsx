
function App() {

  return (
    <>
    <div>
      <main className="m-5 space-y-5">
        <nav id="NavBar" className="bg-yellow-400 w-11/12 mx-auto rounded text-3xl">
            <div className="flex p-5 space-x-5 items-center justify-center md:justify-start">
              <div className="">
                <img src="./src/assets/Icon_Cyberus.png" alt="Cyberus" className="h-12 w-auto" />
              </div>
              <div className="hidden md:flex text-black space-x-5">
                <a href="#" class="bg-purple-800 rounded-md px-3 py-1">Cyberus</a>
                <a href="#" className="hover:bg-purple-800 rounded-md px-3 py-1">Contato</a>
                <a href="#" className="hover:bg-purple-800 rounded-md px-3 py-1">Sobre nós</a> 
              </div>
            </div>
            
        </nav>
        <div id="top-content" className="bg-purple-800 text-yellow-400 flex h-10/12 w-11/12 mx-auto rounded">
            
            
            <div className="relative text-center p-5 content-center">
                
                <h1 className="text-6xl p-5 py-2">
                  A jornada começa agora!
                </h1>
                
                <p className="p-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                
                <p className="p-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                  
                <p className="p-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <p className="p-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                
            </div>

            <img src="./src/assets/imagem_apoio_apresentacao.png" alt="Esportes" className="flex p-5 object-center right-2 h-5/6 w-auto rounded-3xl"/>
            
        </div>
        <div id="botton-content" className="bg-purple-800 text-yellow-400 w-11/12 mx-auto rounded">

            

            <div className="text-center p-5 ">
              <h1 className="text-6xl p-5">Sobre nós</h1>
              <p className="p-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.    
              </p>
            </div>
            <img src="./src/assets/inicio_atletica.png" alt="A gente" className="p-5 h-1/2 w-1/2 object-left rounded-3xl"/>

        </div>
        <div id="contact" className="bg-yellow-400 text-black w-11/12 mx-auto rounded">
            <h1>Contato</h1>
            <p>
              Precisa ter endereço, celular (qrcode para o whats que o Digs quer), e-mail, instagram
            </p>
        </div>
      </main>
    </div>
    </>
  )
}

export default App
