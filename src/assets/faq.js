const faq =
{
    'General Questions':
        [    
            [
                `Should I use tor with this service?`,
                `If you want the best anonymity possible then you should use tor. 
                You should also be sure to copy the item link when you are not signed in to your account. 
                If you copy a link when you are signed in to your account you might leak information such as your wishlist and account name.`
            ],       
            [
                `How long does it take to process an order?`,
                `I aim to process all orders within 12 hours.`
            ],
            [
                `How long does shipping take?`,
                `Shipping usually takes 3 to 5 days from when you place your order. I will keep you updated throughout the entire process and give you a tracking number also.`
            ],
            [
            `Can I buy gift cards from you?`,
            `Not at this time.`
        ],
            [`Where is this service available?`, `We only deliver to US amazon lockers.`
    ],
        ['How Does This Work?', 
        `Here is a basic outline of how ordering with anonymous locker works:
        <ol>
            <li>You find products from Amazon that you would like to purchase.</li>
            <li>You place an order at my website.</li>
            <li>I place an  order for the items that you chose to an amazon locker near you.</li>
            <li>I will use my website's built-in chat function to message you about your order. </li>
            <li>I then message you the locker code when your order is delivered to the amazon locker.</li>
            <li>You pick up your order from the amazon locker using the code you received via my site.</li>
            <li>Enjoy your item, without anyone else knowing what you bought, your home address, or any other private information.</li>
        </ol>
        I also have a full demo of Anonymous Locker <a href="https://res.cloudinary.com/dylevfpbl/video/upload/v1669001384/Untitled.mp4">here</a>.`   
        ],
        ['How Much is This Service?',
        `My service is 3% on top of the amazon order subtotal plus a flat 5 dollar base service fee. My service assumes that the sales tax
        charged by amazon is 8%. This is higher than most purchases will experience, 
        so I will gladly refund you any extra taxes you pay once I place your order
        and get the exact amount.`
        ],
        ['Why Should I hide my shipping address?', 
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
                This is just one example of why you need to protect your shipping and order information.`
        ],
        [
            `What are some of the limitations and stipulations of your service?`,
            `Some current limitations of my service are:
            <ol>
                <li>Items must be fulfilled by amazon since only amazon can ship to amazon lockers.</li>
                <li>We do not offer refunds unless there is an error on our end.</li>
                <li>The minimum order is 25 dollars.</li>
                <li>I can not purchase prime-only items. This includes things like Prime Exclusive Deals.</li>
                <li>We do not offer free Prime 2-Day Shipping, but you can pay extra for faster if you so wish.</li>
                <li> I reserve the right to decline to process an order. In this case, a refund will be issued.</li>
                <li> You should check your order every other day so that you do not miss important information about your order.</li>
            </ol>`
        ],
        [
            `Is this service Anonymous?`, `No, no service can be truly anonymous. There will always be metadata leaks. 
            Amazon lockers and the business they are in have cameras. This service is as slightly more anonymous than going to a store and spending cash. 
            If you want the best anonymity when picking up your order you should wear a face mask, hat and glasses 😎. 
            Or any other clothing to protect your identity.`
        ],
        [
            'Is the Code Open Source?', 'Yes, here is the <a href="https://github.com/DecentralizeJustice/anonymousLocker">github</a> repo for the code.'
        ]
    ],
    'Order Questions': [
        [
            `Which payment methods do you accept?`, 'I accept BTC, LTC, XMR, and ETH currently.'
        ],
        [
            `Do you use prime shipping?`, 'No, I only use the free shipping option offered by amazon, unless you pay for the faster method.'
        ],
        [
            `Do you offer refunds/returns?`, `Yes. Everything but the base and percentage service fee is refundable.`
        ],
        [
            `How do refunds work?`,
            `You and I will coordinate for you to place the item back in the locker, just like a normal amazon return. Once amazon processes and approves the return I will refund you.`
        ],
        [
            `Why is my cart not saved if I refresh?`,
            `I have not implemented cookies yet, since I want to have a clear and simple privacy policy without caveats. I am researching this option
            currently though. `
        ]
    ],
    'Alternative Methods': 
    [
        [
            `Couldn't I just ship my orders to an amazon locker myself?`, 
            `People have been ordering to amazon lockers as a way to accomplish some privacy for years. This process can be highly variable due to Amazon's anti-fraud detection methods. 
            Using a prepaid credit card with a fresh account could result in triggering amazon's anti-fraud detection. I would recommend a prepaid card, residential proxy, burner phone number, burner email and browser emulator like multi-login or incognito if you do this process yourself.
             You might still trigger their anti-fraud detection though, so your mileage will vary. If you have fiat, it would be much easier and safer to just convert that fiat to cash and buy an item in person.`

        ],
        [
            `Can't I use purse.io?`,
            `Purse.io has in the past allowed orders to amazon lockers. Their current 
            <a href="https://purse.crisp.help/en/article/common-questions-about-name-your-discount-faq-19vz0j8/">faq</a>
            does not allow for the delivery to amazon lockers.`
        ],
        [
            `Your service is too expensive. How Can I still get a hardware wallet anonymously?`,
            `Ledger has partnered with <a href="https://www.ledger.com/blog/ledger-nano-x-and-nano-s-plus-now-available-in-all-best-buy-stores-nationwide">Best Buy</a> and they offer wallets for sale in-store. If a store near you has a wallet in stock,
            you can pay for it with cash in person and still protect your identity. `

        ]

    ]

    
}

exports.faq=  faq