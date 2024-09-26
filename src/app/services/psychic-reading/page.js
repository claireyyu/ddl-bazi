export default function page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 p-4 md:p-8 text-slate-700">
      <div className="bg-slate-300 border rounded m-4 md:m-0 aspect-square"></div>

      <div className="flex flex-col gap-8 mx-4 md:mx-16 divide-y-2 divide-solid">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">4. Psychic Reading(Non - BaZi Service)</h1>
          <p className="text-base md:text-lg m-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br /><br />
            <strong>Payment Method:</strong><br /><br />
            PayPal<br />
            WeChat<br />
            AliPay
          </p>
        </div>

        <div>
          <p className="text-lg md:text-xl m-4">AFTER PURCHASE:</p>
          <ol className="list-decimal flex flex-col m-4 text-base md:text-lg">
            <li>Email Us: Send an email to: xxx@hotmail.com Include your PayPal, WeChat, or Alipay reference number or screenshot.</li>
            <li>Prepare Your Question: Meditate on the question you want to ask for 3 minutes, then provide 3 integer numbers (1-999), along with your question.</li>
            <li>You may also include background information for a more detailed interpretation. Restrictions: Please note that we cannot answer questions related to medical health, death, or lawsuit.</li>
            <li>Receive Your Answer: After receiving your information, we will prepare your reading and send the answer to your email within 1 business day.</li>
          </ol>
        </div>

        <p className="text-sm md:text-base">
          Note: Everything is conducted via email, and nothing is shipped out physically.
        </p>
      </div>
    </div>
  );
}
