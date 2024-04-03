import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
const form = document.querySelector(".form")
form.addEventListener("submit", execution)
function execution(event) {
    event.preventDefault();
    const delay = form.delay.value;
    const state = form.state.value;
    const delayNum = Number(delay);
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(state === 'fulfilled') {
                resolve(delayNum);
            } else if(state === 'rejected') {
                reject(delayNum);
            }
        }, delayNum)
            
        });
        promise
    .then(delay => {
      iziToast.success({
       message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
        backgroundColor: '#59a10d',
        messageColor: '#fff',
      });
    })
    .catch(delay => {
      iziToast.error({
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
        backgroundColor: '#ef4040',
        messageColor: '#fff',
});
});
};

