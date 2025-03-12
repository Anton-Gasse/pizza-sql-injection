let currentDiscount = [[0]];
        let currenctCoupon = null;

        function checkCoupon() {
            const couponInput = document.getElementById('coupon').value;

            if (couponInput) {
                
                fetch(`/check_coupon/${couponInput}`)
                    .then(response => response.json())
                    .then(data => {
                        
                        const resultElement = document.getElementById('coupon-result');

                        if (data.percent !== null) {
                            currentDiscount = data.percent;

                            resultElement.textContent = `Discount: ${data.percent}%`;
                            currenctCoupon = couponInput;

                        } else {
                            currentDiscount = [[0]];
                            currenctCoupon = null;
                            resultElement.textContent = "Invalid coupon code.";
                        }
                    })
                    .catch(error => {
                        console.error('Error fetching coupon:', error);
                    });
            }
        }

        async function handleFormSubmit(event) {

            event.preventDefault();

            const nameInput = document.getElementById('name').value;

            if (!currenctCoupon) {
                alert("Try again, the discount is not 100%.");
                return;
            }

            try {
                const couponResponse = await fetch(`/check_coupon/${currenctCoupon}`);
                const couponData = await couponResponse.json();

                if (couponData.percent[0][0] !== 100) {
                    alert("Try again, the discount is not 100%.");
                    return;
                }

                // Only proceed if the coupon gives a 100% discount
                const scoreboardResponse = await fetch('/scoreboard', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name: nameInput , coupon: currenctCoupon}),
                });

                const scoreboardData = await scoreboardResponse.json();

                if (scoreboardData.message) {
                    alert("Success! Your order is free!");
                } else {
                    alert("Error updating the server.");
                }
            } catch (error) {
                console.error('Error processing form:', error);
                alert("An error occurred. Please try again later.");
            }
        }