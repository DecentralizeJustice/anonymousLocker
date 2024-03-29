const faq = {
  "Concierge/Home Delivery Questions": [
    [
      `Can I use tor with your site?`,
      `Yes, you can use tor but the site does require javascript to work.`,
    ],
    [
      `Can you do International Orders?`,
      `yes.`,
    ],
    [
      `Where can you order items from?`,
      `We can order any items that are legal and for sale online.`,
    ],
    [
      `Do you offer refunds?`,
      `Due to Amazon return scams, you must make an account and use the included gift recipient to make a return on delivered items.`,
    ]
  ],
  "Locker Questions": [
    [
      `Can you do International Orders?`,
      `Yes. We can not deliver outside of your country's Amazon Site though. For example, we can not deliver from US Amazon to Japan Amazon.
                We can deliver to lockers within the same country.`,
    ],
    [`Can I buy gift cards from you?`, `Yes, here is an example of the debit gift cards that we offer,
    <a href="https://amazon.com/Visa-Gift-Card-plus-Purchase/dp/B07HJD9FVV">prepaid gift cards.</a> . You can also buy gift cards to stores such as Walmart and Target, all anonymously.`],
    [`Where is this service available?`, `Anywhere that has Amazon Lockers.`],
    [
      `Should I use tor with this service?`,
      `If you want the best anonymity possible then you should use tor. 
                You should also be sure to copy the item link when you are not signed in to your account. 
                If you copy a link when you are signed in to your account you might leak information such as your wishlist and account name.`,
    ],
    [
      `How long does it take to process an order?`,
      `I aim to process all orders within 24 hours.`,
    ],
    [
      `How long does shipping take?`,
      `Shipping usually takes 3 to 5 days from when you place your order. I will keep you updated throughout the entire process and give you a tracking number also.`,
    ],
    [
      "How Does This Work?",
      `Here is a basic outline of how ordering with Anon Shop works:
        <ol>
            <li>You find products from Amazon that you would like to purchase.</li>
            <li>You place an order at my website.</li>
            <li>I place an  order for the items that you chose to an amazon locker near you.</li>
            <li>I will use my website's built-in chat function to message you about your order. </li>
            <li>I then message you the locker code when your order is delivered to the amazon locker.</li>
            <li>You pick up your order from the amazon locker using the code you received via my site.</li>
            <li>Enjoy your item, without anyone else knowing what you bought, your home address, or any other private information.</li>
        </ol>
        I also have a full demo of Anonymous Locker <a href="https://res.cloudinary.com/dylevfpbl/video/upload/v1669001384/Untitled.mp4">here</a>.`,
    ],
/*     [
      "How Much is This Service?",
      `My service is 3% on top of the amazon order subtotal plus a flat 5 dollar base service fee. My service assumes that the sales tax
        charged by amazon is 8%. This is higher than most purchases will experience, 
        so I will gladly refund you any extra taxes you pay once I place your order
        and get the exact amount.`,
    ], */
    [
      "Why Should I hide my shipping address?",
      `Let's say you wanted to buy a hardware wallet. 
                If you order from a retailer they will have your address and they could leak that information. 
                <a href="https://cointelegraph.com/news/ledger-data-leak-a-simple-mistake-exposed-270k-crypto-wallet-buyers">Ledger</a>
                and 
                <a href="https://blog.trezor.io/details-of-the-mailchimp-data-breach-a06872caa1fd">Trezor</a>
                have both leaked customer information in the past. 
                <a href="https://www.reddit.com/r/ledgerwallet/comments/kiu13j/thank_you_ledger_im_now_getting_threats_im_going/">People received</a> 
                death threats due to these leaks. 
                You should not be punished for securing your crypto. 
                My service helps hide your address to prevent leaks like this.
                This is just one example of why you need to protect your shipping and order information.`,
    ],
    [
      `What are some of the limitations and stipulations of your service?`,
      `Some current limitations of my service are:
            <ol>
                <li>Items must be fulfilled by amazon since only amazon can ship to amazon lockers.</li>
                <li>We do not offer refunds unless there is an error on our end.</li>
                <li>We offer returns for delivered items at our discretion.</li>
                <li>The minimum order is 25 dollars.</li>
                <li>I can not purchase prime-only items. This includes things like Prime Exclusive Deals.</li>
                <li>We do not offer free Prime 2-Day Shipping, but you can pay extra for faster if you so wish.</li>
                <li> I reserve the right to decline to process an order. In this case, a refund will be issued.</li>
                <li> You should check your order every other day so that you do not miss important information about your order.</li>
            </ol>`,
    ],
    [
      `Is this service Anonymous?`,
      `No, no service can be truly anonymous. There will always be metadata leaks. 
            Amazon lockers and the business they are in have cameras. This service is as slightly more anonymous than going to a store and spending cash. 
            If you want the best anonymity when picking up your order you should wear a face mask, hat and glasses 😎. 
            Or any other clothing to protect your identity.`,
    ],
    [
      "Is the Code Open Source?",
      'Yes, here is the <a href="https://github.com/DecentralizeJustice/anonymousLocker">github</a> repo for the code.',
    ],
    [
      `What happens If I don't pick my order up from the locker?`,
      `If you don't pick up your order you will lose your funds. If you can not pick up your orders, I would recommend you use the home delivery option.
            `,
    ],
    [
      `Are there size restrictions?`,
      `Yes. Large items such as printers or a bulk order of a product might not fit in the locker.
            If the order does not fit, we will issue a full refund.
            `,
    ],
/*     [
      `Which payment methods do you accept?`,
      "I accept BTC, LTC, XMR, and ETH currently.",
    ], */
    [
      `Do you use prime shipping?`,
      "No, I only use the free shipping option offered by amazon, unless you pay for the faster method.",
    ],
    [
      `Do you offer refunds/returns?`,
      `Due to Amazon return scams, you must make an account and use the included gift recipient to make a return.`,
    ],
    [
      `Why is my cart not saved if I refresh?`,
      `I have not implemented cookies yet, since I want to have a clear and simple privacy policy without caveats. I am researching this option
            currently though. `,
    ],
    [
      `Couldn't I just ship my orders to an amazon locker myself?`,
      `People have been ordering to amazon lockers as a way to accomplish some privacy for years. This process can be highly variable due to Amazon's anti-fraud detection methods. 
            Using a prepaid credit card with a fresh account could result in triggering amazon's anti-fraud detection. I would recommend a prepaid card, residential proxy, burner phone number, burner email and browser emulator like multi-login or incognito if you do this process yourself.
             You might still trigger their anti-fraud detection though, so your mileage will vary. If you have fiat, it would be much easier and safer to just convert that fiat to cash and buy an item in person.`,
    ],
    [
      `Can't I use purse.io?`,
      `Purse.io has in the past allowed orders to amazon lockers. Their current 
            <a href="https://purse.crisp.help/en/article/common-questions-about-name-your-discount-faq-19vz0j8/">faq</a>
            does not allow for the delivery to amazon lockers.`,
    ],
    [
      `How Can else can I get a hardware wallet anonymously?`,
      `Ledger has partnered with <a href="https://www.ledger.com/blog/ledger-nano-x-and-nano-s-plus-now-available-in-all-best-buy-stores-nationwide">Best Buy</a> and they offer wallets for sale in-store. If a store near you has a wallet in stock,
            you can pay for it with cash in person and still protect your identity. `,
    ],
  ]
};
const shopperfaq = {
  "General Shopper Questions": [
    [
      `What are my responsibilities as a shopper?`,
      `To answer all questions within a day.`,
    ],
    [
      `How much is this service?`,
      `The cost depends on your delivery method.`,
    ],
    [
      `What happens if there is an order dispute between earner and shopper?`,
      `We will get the retail account login of the earner to determine who is correct. Whoever is correct will receive the other's bond amount.`,
    ],
    [
      `What if I have questions or run into problems?`,
      `You should ask us questions using the ask question button in the upper right.`,
    ],
    [
      `Can I cancel an order after it is selected by an earner?`,
      `No.`,
    ],
    [
      `How much is the shopper deposit?`,
      `It is currently 5 USD of Monero.`,
    ],
  ],

};

const earnerfaq = {
  "General Earner Questions": [
    [
      `Do I need an Amazon account to complete orders?`,
      `Yes.`,
    ],
    [
      `What are my responsibilities as a shopper?`,
      `You should take the next step in the order process within one hour.`,
    ],
    [
      `What happens if there is an order dispute between earner and shopper?`,
      `We will need your retail account login to determine who is correct. Whoever is correct will receive the other's bond amount.`,
    ],
    [
      `What if I have questions or run into problems?`,
      `You should ask us questions using the ask question button in the upper right.`,
    ],
    [
      `Can I cancel an order after I select it?`,
      `No. Once you accept and order you must complete it.`,
    ],
    [
      `How much is the earner deposit bond?`,
      `It is currently 5 USD worth of Monero.`,
    ],
  ],

};
const homeFAQ = {
  "Concierge/Home Delivery Questions": [
    [
      `Can I use tor with your site?`,
      `Yes, you can use tor but the site does require javascript to work.`,
    ],
    [
      `Can you do International Orders?`,
      `We can deliver to you your country if the online retailer that you choose,
      delivers to your country. We only offer mail forwarding for US addresses at this time.`,
    ],
    [
      `Where can you order items from?`,
      `We can order any items that are legal and for sale online.`,
    ],
    [
      `Do you offer refunds?`,
      `Due to Amazon return scams, you must make an account and use the included gift recipient to make a return on delivered items.`,
    ]
  ],
}
const generalFAQ = {
  
  "General Questions": [
    [
      `Do you support pgp keys?`,
      `Yes, our pgp key is below. We only support pgp for package forwarding service. So you should place an order
      ship to address order and use the pgp key to encrypt your real order info after you place an order. If you have any questions
      just place an order and ask in the chat. <br/><br/>
      -----BEGIN PGP PUBLIC KEY BLOCK-----

mQENBGR7a3IBCAC2PXhLM0QtXYXaEFBluUdEr2x+X23c2G2FCM6isVMW3hsWcdhw
zWYnwCkqsG5/LjJ+N/jVQPTbzuw0KaZunIOofhSEncFzchlaJYRYaZUu0dEiB30y
jhL9qUavZM0ItM10GAuQPanfCGu+fIGi6u/ReGhJLnayhXOm8uJZ/zZCvCtnRLZ+
wqgWg8dxQJ835lp1tuv43lvGoN7/iiy/q2pOQM+jpDbY7GMQtCBXEdBXj6xo6f8L
/+m1JpNEIgHt0EH5wuGJa5/3bVxoF9lD1yPoaNx1/AVc3oJaBHEHDaUiICbfUy/L
sakmKaB7w2HWFjQ8chz+OYo9li3K+oEs8XsRABEBAAG0GWFub25zaG9wKCk8bm9u
QGdtYWlsLmNvbT6JAVcEEwEIAEEWIQRnaTbI9fiMt3VgIUFd1S8ldI/oXwUCZHtr
cgIbLwUJA8O4VgULCQgHAgIiAgYVCgkICwIEFgIDAQIeBwIXgAAKCRBd1S8ldI/o
X2VCB/9H5UQXnxIAfFwGDAVQAXUt0qsRLDZkTzP6t/pe1IfGiL9yhf3CP0K17Xpk
t9UeKUOT9Eh4Sx6m7bwbbPJYAAwjeJsHMogAp4Z4w1jZT9yTvvPhH71b0HAJa5wz
EwpwhgjlfzLomBWJ7P7UYoOAjTlYo1DcmJV+vsrVZctS/CXLZGWdGGOIq5IU1bQ/
974vTh8M2X9QqJPCwkq+ZIEJ9YqnrDmInNQsp5cj63nfwxjSjX/fvLrJdR3qS6Ym
GvuZDlXea0jQmguqeDCWk+FOiJwdJO7E13+JijyGBn/IHUsG1btq0BGEWOQWjGij
rIuyWTobPbr6x1qUJjlYdZxLaUEE
=b95u
-----END PGP PUBLIC KEY BLOCK-----
 `,
    ],
    [
      `Your website list tax as 8%, but the tax is not that high.`,
      `Yes, we assume a higher than average tax on items that we buy to save the time of asking for more funds. If you want an exact tax simply ask us after your order is placed.`,
    ],
    [
      `What can I buy with your service?`,
      `You can buy anything that is not a subscription, with my service. Giftcards, computers are good to go
      but I can not pay for your Twitter blue service for example. If you want to buy a subscription, we can sale you a gift card for most services.`,
    ],
    [
      `How fast is your service?`,
      `We try our best to process all orders within 24 hours, but our service has a focus on privacy not speed.
      If you value the speed of your order more than the privacy of our shop, you should use another service. `,
    ]
  ],
}
const lockerFAQ = {
  "General Locker Delivery Questions":  [
    [
      `Is this service Anonymous?`,
      `No, no service can be truly anonymous. There will always be metadata leaks. 
            Amazon lockers and the business they are in have cameras. This service is as slightly more anonymous than going to a store and spending cash. 
            If you want the best anonymity when picking up your order you should wear a face mask, hat and glasses 😎. 
            Or any other clothing to protect your identity.`,
    ],
    [
      `Can you do International Orders?`,
      `Yes. We can not deliver outside of your country's Amazon Site though. For example, we can not deliver from US Amazon to Japan Amazon.
                We can deliver to lockers within the same country.`,
    ],
    [`Can I buy gift cards from you?`, `Yes, here is an example of the debit gift cards that we offer,
    <a href="https://amazon.com/Visa-Gift-Card-plus-Purchase/dp/B07HJD9FVV">prepaid gift cards.</a> . You can also buy gift cards to stores such as Walmart and Target, all anonymously.`],
    [`Where is this service available?`, `Anywhere that has Amazon Lockers.`],
    [
      `Should I use tor with this service?`,
      `If you want the best anonymity possible then you should use tor. 
                You should also be sure to copy the item link when you are not signed in to your account. 
                If you copy a link when you are signed in to your account you might leak information such as your wishlist and account name.`,
    ],
    [
      `How long does it take to process an order?`,
      `I aim to process all orders within 24 hours.`,
    ],
    [
      `How long does shipping take?`,
      `Shipping usually takes 3 to 5 days from when you place your order. I will keep you updated throughout the entire process and give you a tracking number also.`,
    ],
    [
      "How Does This Work?",
      `Here is a basic outline of how ordering with Anon Shop works:
        <ol>
            <li>You find products from Amazon that you would like to purchase.</li>
            <li>You place an order at my website.</li>
            <li>I place an  order for the items that you chose to an amazon locker near you.</li>
            <li>I will use my website's built-in chat function to message you about your order. </li>
            <li>I then message you the locker code when your order is delivered to the amazon locker.</li>
            <li>You pick up your order from the amazon locker using the code you received via my site.</li>
            <li>Enjoy your item, without anyone else knowing what you bought, your home address, or any other private information.</li>
        </ol>
        I also have a full demo of Anonymous Locker <a href="https://res.cloudinary.com/dylevfpbl/video/upload/v1669001384/Untitled.mp4">here</a>.`,
    ],
/*     [
      "How Much is This Service?",
      `My service is 3% on top of the amazon order subtotal plus a flat 5 dollar base service fee. My service assumes that the sales tax
        charged by amazon is 8%. This is higher than most purchases will experience, 
        so I will gladly refund you any extra taxes you pay once I place your order
        and get the exact amount.`,
    ], */
    [
      "Why Should I hide my shipping address?",
      `Let's say you wanted to buy a hardware wallet. 
                If you order from a retailer they will have your address and they could leak that information. 
                <a href="https://cointelegraph.com/news/ledger-data-leak-a-simple-mistake-exposed-270k-crypto-wallet-buyers">Ledger</a>
                and 
                <a href="https://blog.trezor.io/details-of-the-mailchimp-data-breach-a06872caa1fd">Trezor</a>
                have both leaked customer information in the past. 
                <a href="https://www.reddit.com/r/ledgerwallet/comments/kiu13j/thank_you_ledger_im_now_getting_threats_im_going/">People received</a> 
                death threats due to these leaks. 
                You should not be punished for securing your crypto. 
                My service helps hide your address to prevent leaks like this.
                This is just one example of why you need to protect your shipping and order information.`,
    ],
    [
      `What are some of the limitations and stipulations of your service?`,
      `Some current limitations of my service are:
            <ol>
                <li>Items must be fulfilled by amazon since only amazon can ship to amazon lockers.</li>
                <li>We do not offer refunds unless there is an error on our end.</li>
                <li>We offer returns for delivered items at our discretion.</li>
                <li>The minimum order is 25 dollars.</li>
                <li>I can not purchase prime-only items. This includes things like Prime Exclusive Deals.</li>
                <li>We do not offer free Prime 2-Day Shipping, but you can pay extra for faster if you so wish.</li>
                <li> I reserve the right to decline to process an order. In this case, a refund will be issued.</li>
                <li> You should check your order every other day so that you do not miss important information about your order.</li>
            </ol>`,
    ],
    [
      `Is this service Anonymous?`,
      `No, no service can be truly anonymous. There will always be metadata leaks. 
            Amazon lockers and the business they are in have cameras. This service is as slightly more anonymous than going to a store and spending cash. 
            If you want the best anonymity when picking up your order you should wear a face mask, hat and glasses 😎. 
            Or any other clothing to protect your identity.`,
    ],
    [
      "Is the Code Open Source?",
      'Yes, here is the <a href="https://github.com/DecentralizeJustice/anonymousLocker">github</a> repo for the code.',
    ],
    [
      `What happens If I don't pick my order up from the locker?`,
      `If you don't pick up your order you will lose your funds. If you can not pick up your orders, I would recommend you use the home delivery option.
            `,
    ],
    [
      `Are there size restrictions?`,
      `Yes. Large items such as printers or a bulk order of a product might not fit in the locker.
            If the order does not fit, we will issue a full refund.
            `,
    ],
/*     [
      `Which payment methods do you accept?`,
      "I accept BTC, LTC, XMR, and ETH currently.",
    ], */
    [
      `Do you use prime shipping?`,
      "No, I only use the free shipping option offered by amazon, unless you pay for the faster method.",
    ],
    [
      `Do you offer refunds/returns?`,
      `Due to Amazon return scams, you must make an account and use the included gift recipient to make a return. If you would like to have a gift receipt added, please shoot us a message after you place your order.`,
    ],
    [
      `Why is my cart not saved if I refresh?`,
      `I have not implemented cookies yet, since I want to have a clear and simple privacy policy without caveats. I am researching this option
            currently though. `,
    ],
    [
      `Couldn't I just ship my orders to an amazon locker myself?`,
      `People have been ordering to amazon lockers as a way to accomplish some privacy for years. This process can be highly variable due to Amazon's anti-fraud detection methods. 
            Using a prepaid credit card with a fresh account could result in triggering amazon's anti-fraud detection. I would recommend a prepaid card, residential proxy, burner phone number, burner email and browser emulator like multi-login or incognito if you do this process yourself.
             You might still trigger their anti-fraud detection though, so your mileage will vary. If you have fiat, it would be much easier and safer to just convert that fiat to cash and buy an item in person.`,
    ],
    [
      `Can't I use purse.io?`,
      `Purse.io has in the past allowed orders to amazon lockers. Their current 
            <a href="https://purse.crisp.help/en/article/common-questions-about-name-your-discount-faq-19vz0j8/">faq</a>
            does not allow for the delivery to amazon lockers.`,
    ],
    [
      `How Can else can I get a hardware wallet anonymously?`,
      `Ledger has partnered with <a href="https://www.ledger.com/blog/ledger-nano-x-and-nano-s-plus-now-available-in-all-best-buy-stores-nationwide">Best Buy</a> and they offer wallets for sale in-store. If a store near you has a wallet in stock,
            you can pay for it with cash in person and still protect your identity. `,
    ],
  ]

};

exports.faq = faq;
exports.shopperfaq = shopperfaq
exports.earnerfaq = earnerfaq
exports.lockerFAQ = lockerFAQ
exports.homeFAQ = homeFAQ
exports.generalFAQ = generalFAQ
