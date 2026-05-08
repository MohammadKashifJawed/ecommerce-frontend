import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { TotalPriceContext } from "@/context/TotalPriceContext";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import UpiPayment from "../crud/UpiPayment";

const Order = () => {
  const { finalTotal, discount, platformFee, totalPayableAmount } =
    useContext(TotalPriceContext);
  const [upi, setUpi] = useState(false);
  const [card, setCard] = useState(false);
  const [cod, setCod] = useState(false);
  const [showOrderBtn, setShowOrderBtn] = useState(false);
  const handleOrderBtn = (e) => {
    if (e.target.checked) {
      setShowOrderBtn(true)
    }else(
        setShowOrderBtn(false)
    )
  };
  return (
    // <div className="h-screen w-full flex flex-col justify-center items-center">
    //   <div>
    //     <div onClick={() => setUpi(!upi)}>UPI</div>
    //     {upi && <div>lorem</div>}
    //     <div onClick={() => setCard(!card)}>Credit/Debit card</div>
    //     {card && <CardPayment />}
    //     <div onClick={() => setCod(!cod)}>COD</div>
    //     {cod && <div>COD</div>}
    //   </div>
    //   <div>

    //   </div>
    // </div>
    <div className="min-h-[90vh] w-full flex">
      <div className="min-h-full w-2/3 flex flex-col items-center gap-5 shadow-lg">
        <div
          onClick={() => setUpi(!upi)}
          className="h-20 w-8/10 border border-black flex justify-center items-center text-2xl 
                font-bold text-neutral-700"
        >
          UPI {upi ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        {upi && <UpiPayment />}
        <div
          onClick={() => setCard(!card)}
          className="h-20 w-8/10 border border-black flex justify-center items-center text-2xl 
                font-bold text-neutral-700"
        >
          Card {card ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        {card && <CardPayment />}
        <div
          onClick={() => setCod(!cod)}
          className="h-20 w-8/10 border border-black flex justify-center items-center text-2xl 
                font-bold text-neutral-700"
        >
          COD {cod ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        {cod && (
          <div className="h-10 w-8/10 flex justify-between items-center border-2 text-xl px-2">
            <label htmlFor="cod">Cash on delivery</label>
            <input
              onChange={(e) => handleOrderBtn(e)}
              type="checkbox"
              name="cod"
              id="cod"
            />
          </div>
        )}
      </div>

      <div className="h-[90vh] w-1/3 text-neutral-800 font-semibold">
        <p className="flex justify-between items-center p-2">
          <span>Total MRP</span> <span>${finalTotal}</span>
        </p>
        <p className="flex justify-between items-center p-2">
          <span>Discount</span> <span>${discount}</span>
        </p>
        <p className="flex justify-between items-center p-2">
          <span>Platform fee</span> <span>${platformFee}</span>
        </p>{" "}
        <hr />
        <p className="flex justify-between items-center p-2">
          <span className="font-bold">Total amount</span>{" "}
          <span>${totalPayableAmount}</span>
        </p>
        {showOrderBtn && (
          <button className="py-3 px-6 m-2 bg-blue-950 text-white font-semibold float-end cursor-pointer">
            Place Order
          </button>
        )}
      </div>
    </div>
  );
};

export default Order;

export function CardPayment() {
  return (
    <div className="w-8/10 shadow-lg shadow-neutral-400 rounded-md p-2">
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Payment Method</FieldLegend>
            <FieldDescription>
              All transactions are secure and encrypted
            </FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                  Name on Card
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-name-43j"
                  placeholder="Evil Rabbit"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                  Card Number
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-number-uw1"
                  placeholder="1234 5678 9012 3456"
                  required
                />
                <FieldDescription>
                  Enter your 16-digit card number
                </FieldDescription>
              </Field>
              <div className="grid grid-cols-3 gap-4">
                <Field>
                  <FieldLabel htmlFor="checkout-exp-month-ts6">
                    Month
                  </FieldLabel>
                  <Select defaultValue="">
                    <SelectTrigger id="checkout-exp-month-ts6">
                      <SelectValue placeholder="MM" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="01">01</SelectItem>
                        <SelectItem value="02">02</SelectItem>
                        <SelectItem value="03">03</SelectItem>
                        <SelectItem value="04">04</SelectItem>
                        <SelectItem value="05">05</SelectItem>
                        <SelectItem value="06">06</SelectItem>
                        <SelectItem value="07">07</SelectItem>
                        <SelectItem value="08">08</SelectItem>
                        <SelectItem value="09">09</SelectItem>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="11">11</SelectItem>
                        <SelectItem value="12">12</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-exp-year-f59">
                    Year
                  </FieldLabel>
                  <Select defaultValue="">
                    <SelectTrigger id="checkout-7j9-exp-year-f59">
                      <SelectValue placeholder="YYYY" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2025">2025</SelectItem>
                        <SelectItem value="2026">2026</SelectItem>
                        <SelectItem value="2027">2027</SelectItem>
                        <SelectItem value="2028">2028</SelectItem>
                        <SelectItem value="2029">2029</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-cvv">CVV</FieldLabel>
                  <Input id="checkout-7j9-cvv" placeholder="123" required />
                </Field>
              </div>
            </FieldGroup>
          </FieldSet>
          <FieldSeparator />
          <FieldSet>
            <FieldLegend>Billing Address</FieldLegend>
            <FieldDescription>
              The billing address associated with your payment method
            </FieldDescription>
            <FieldGroup>
              <Field orientation="horizontal">
                <Checkbox
                  id="checkout-7j9-same-as-shipping-wgm"
                  defaultChecked
                />
                <FieldLabel
                  htmlFor="checkout-7j9-same-as-shipping-wgm"
                  className="font-normal"
                >
                  Same as shipping address
                </FieldLabel>
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-optional-comments">
                  Comments
                </FieldLabel>
                <Textarea
                  id="checkout-7j9-optional-comments"
                  placeholder="Add any additional comments"
                  className="resize-none"
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <Button type="submit">Pay</Button>
            <Button variant="outline" type="button">
              Cancel
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}

