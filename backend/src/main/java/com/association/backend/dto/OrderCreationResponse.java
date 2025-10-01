//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.association.backend.dto;

import lombok.Generated;

public class OrderCreationResponse {
    private String orderId;
    private Integer amount;
    private String currency;
    private String memberId;
    private String razorpayKeyId;
    private String message;

    @Generated
    public String getOrderId() {
        return this.orderId;
    }

    @Generated
    public Integer getAmount() {
        return this.amount;
    }

    @Generated
    public String getCurrency() {
        return this.currency;
    }

    @Generated
    public String getMemberId() {
        return this.memberId;
    }

    @Generated
    public String getRazorpayKeyId() {
        return this.razorpayKeyId;
    }

    @Generated
    public String getMessage() {
        return this.message;
    }

    @Generated
    public void setOrderId(final String orderId) {
        this.orderId = orderId;
    }

    @Generated
    public void setAmount(final Integer amount) {
        this.amount = amount;
    }

    @Generated
    public void setCurrency(final String currency) {
        this.currency = currency;
    }

    @Generated
    public void setMemberId(final String memberId) {
        this.memberId = memberId;
    }

    @Generated
    public void setRazorpayKeyId(final String razorpayKeyId) {
        this.razorpayKeyId = razorpayKeyId;
    }

    @Generated
    public void setMessage(final String message) {
        this.message = message;
    }

    @Generated
    public boolean equals(final Object o) {
        if (o == this) {
            return true;
        } else if (!(o instanceof OrderCreationResponse)) {
            return false;
        } else {
            OrderCreationResponse other = (OrderCreationResponse)o;
            if (!other.canEqual(this)) {
                return false;
            } else {
                Object this$amount = this.getAmount();
                Object other$amount = other.getAmount();
                if (this$amount == null) {
                    if (other$amount != null) {
                        return false;
                    }
                } else if (!this$amount.equals(other$amount)) {
                    return false;
                }

                Object this$orderId = this.getOrderId();
                Object other$orderId = other.getOrderId();
                if (this$orderId == null) {
                    if (other$orderId != null) {
                        return false;
                    }
                } else if (!this$orderId.equals(other$orderId)) {
                    return false;
                }

                Object this$currency = this.getCurrency();
                Object other$currency = other.getCurrency();
                if (this$currency == null) {
                    if (other$currency != null) {
                        return false;
                    }
                } else if (!this$currency.equals(other$currency)) {
                    return false;
                }

                Object this$memberId = this.getMemberId();
                Object other$memberId = other.getMemberId();
                if (this$memberId == null) {
                    if (other$memberId != null) {
                        return false;
                    }
                } else if (!this$memberId.equals(other$memberId)) {
                    return false;
                }

                Object this$razorpayKeyId = this.getRazorpayKeyId();
                Object other$razorpayKeyId = other.getRazorpayKeyId();
                if (this$razorpayKeyId == null) {
                    if (other$razorpayKeyId != null) {
                        return false;
                    }
                } else if (!this$razorpayKeyId.equals(other$razorpayKeyId)) {
                    return false;
                }

                Object this$message = this.getMessage();
                Object other$message = other.getMessage();
                if (this$message == null) {
                    if (other$message != null) {
                        return false;
                    }
                } else if (!this$message.equals(other$message)) {
                    return false;
                }

                return true;
            }
        }
    }

    @Generated
    protected boolean canEqual(final Object other) {
        return other instanceof OrderCreationResponse;
    }

    @Generated
    public int hashCode() {
        int PRIME = 59;
        int result = 1;
        Object $amount = this.getAmount();
        result = result * 59 + ($amount == null ? 43 : $amount.hashCode());
        Object $orderId = this.getOrderId();
        result = result * 59 + ($orderId == null ? 43 : $orderId.hashCode());
        Object $currency = this.getCurrency();
        result = result * 59 + ($currency == null ? 43 : $currency.hashCode());
        Object $memberId = this.getMemberId();
        result = result * 59 + ($memberId == null ? 43 : $memberId.hashCode());
        Object $razorpayKeyId = this.getRazorpayKeyId();
        result = result * 59 + ($razorpayKeyId == null ? 43 : $razorpayKeyId.hashCode());
        Object $message = this.getMessage();
        result = result * 59 + ($message == null ? 43 : $message.hashCode());
        return result;
    }

    @Generated
    public String toString() {
        String var10000 = this.getOrderId();
        return "OrderCreationResponse(orderId=" + var10000 + ", amount=" + this.getAmount() + ", currency=" + this.getCurrency() + ", memberId=" + this.getMemberId() + ", razorpayKeyId=" + this.getRazorpayKeyId() + ", message=" + this.getMessage() + ")";
    }

    @Generated
    public OrderCreationResponse() {
    }

    @Generated
    public OrderCreationResponse(final String orderId, final Integer amount, final String currency, final String memberId, final String razorpayKeyId, final String message) {
        this.orderId = orderId;
        this.amount = amount;
        this.currency = currency;
        this.memberId = memberId;
        this.razorpayKeyId = razorpayKeyId;
        this.message = message;
    }
}
