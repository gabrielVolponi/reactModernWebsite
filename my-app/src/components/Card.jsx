const questao = {
    numero: '1',
    texto: 'I find it difficul to relax, even during free time or enjoyable activities',
}


function CardQuestion() {
  return (
    <div id="card" className=" rounded-md w-md h-md border-black border-2 flex flex-col ">
      <div
        id="headerCard"
        className="w-9/10 flex justify-between items-center mx-4 my-2"
      >
        <span className="font-bold">Question</span>
        <i class="fa-solid fa-xmark font-bold"></i>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Abstract Art" className="w-full h-60 object-cover" />
        <div className="flex justify-between mx-4 my-2 font-medium">
          <p>{questao.numero}/10 Questions</p>
          <button>Back</button>
        </div>
        <span  className="block font-bold text-start mb-22 mt-2 mx-4">
            {questao.texto} 
        </span>
        <div className="flex gap-3 mx-4 my-2">
            <button id="agree" className="border-black border-2 w-1/2 rounded-md py-1.5 transition ease-in-out hover:scale-105 hover:bg-green-700 hover:text-white hover:border-green-700">Agree</button>
            <button id="desagree" className="border-black border-2 w-1/2 rounded-md transition ease-in-out hover:scale-105 hover:bg-red-700 hover:text-white hover:border-red-700">Do not agree</button>
        </div>
      </div>
    </div>
  );
}

export default CardQuestion;
