import { htmlString } from '../Conversion';
import axios from 'axios';

const sendNewsLetter = async () => {

    try{

      const response = await axios.post("http://localhost:4000/send-newsletter", 
        {
          htmlString
        }
      );

      console.log("request sent!");

    } catch(err) {

      console.log("error!");

    }

}

export const LandingPage = () => {
    return <section className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-8 h-8 mr-2" src="https://www.svgrepo.com/show/99087/newsletter.svg" alt="logo"/>
            Mail Distribution    
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Send mails to your subscribers
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                    <button onClick={sendNewsLetter} type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Broadcast</button>
                    <p className="text-center text-sm font-light text-gray-500 dark:text-gray-400">
                      Preview your news-letter <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">here</a>
                    </p>
                </form>
            </div>
        </div>
    </div>
  </section>
}