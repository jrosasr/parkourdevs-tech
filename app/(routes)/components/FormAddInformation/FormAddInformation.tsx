"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { isValidPhoneNumber } from "react-phone-number-input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PhoneInput } from "@/components/Shared/PhoneInput";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  dni: z.string().min(2).max(15),
  phone: z
  .string()
  .refine(isValidPhoneNumber, { message: "Invalid phone number" })
  .or(z.literal("")),
  address: z.string().min(2).max(200),
  salary: z.string().min(1, { message: "The amount is required"}).max(8, { message: "The amount cannot be greater than 8 figures" }),
  userId: z.number(),
});
export function FormAddInformation(props: { userId: number }) {
  const { userId } = props;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      dni: "",
      phone: "",
      address: "",
      salary: "",
      userId: userId,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const handleAmountChange = (e) => {
    const value = e.target.value
    const numericValue = value.replace(/[^0-9.]/g, "")
    let formattedValue = formatAmount(numericValue)
    formattedValue = formatAmount(numericValue.slice(0, 8))
    form.setValue("salary", formattedValue)

    if (
      isNaN(parseFloat(numericValue)) ||
      numericValue.split(".").length > 2 ||
      (numericValue.split(".")[1] && numericValue.split(".")[1].length > 2)
    ) {
      form.setError("salary", {
        type: "manual",
        message: "Please enter a valid amount",
      })
    }
  }

  const formatAmount = (value: string) => {
    if (!value) return ""
    const parts = value.split(".")
    let formattedValue = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    if (parts[1]) {
      formattedValue += "." + parts[1].slice(0, 2)
    }
    return formattedValue
  }

  const handleCedulaChange = (e) => {
    let value = e.target.value.replace(/\D/g, "")
    if (value.length > 8) {
      value = value.slice(0, 8)
    }
    const formattedValue = value.replace(/(\d{2})(\d{3})(\d{3})/, "$1.$2.$3")
    form.setValue("dni", formattedValue)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dni"
          render={({ field }) => (
            <FormItem>
              <FormLabel>DNI</FormLabel>
              <FormControl>
                <Input
                  id="cedula"
                  type="text"
                  {...field}
                  onChange={handleCedulaChange}
                  placeholder="12.345.678"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  maxLength={10}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <PhoneInput focusInputOnCountrySelection {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="Address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="salary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Salary</FormLabel>
              <FormControl>
                {/* <Input type="number" min={0} placeholder="0" {...field} /> */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <span className="text-muted-foreground">$</span>
                  </div>
                  <Input
                    id="amount"
                    type="text"
                    {...field}
                    max={8}
                    onChange={handleAmountChange}
                    className="pl-7"
                    placeholder="0.00"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">Save</Button>
      </form>
    </Form>
  );
}
