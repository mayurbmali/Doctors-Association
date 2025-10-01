//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.association.backend.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Generated;

public class PaymentVerificationRequest {
    private @NotBlank(
            message = "Razorpay order ID is required"
    ) String razorpayOrderId;
    private @NotBlank(
            message = "Razorpay payment ID is required"
    ) String razorpayPaymentId;
    private @NotBlank(
            message = "Razorpay signature is required"
    ) String razorpaySignature;

    @Generated
    public String getRazorpayOrderId() {
        return this.razorpayOrderId;
    }

    @Generated
    public String getRazorpayPaymentId() {
        return this.razorpayPaymentId;
    }

    @Generated
    public String getRazorpaySignature() {
        return this.razorpaySignature;
    }

    @Generated
    public void setRazorpayOrderId(final String razorpayOrderId) {
        this.razorpayOrderId = razorpayOrderId;
    }

    @Generated
    public void setRazorpayPaymentId(final String razorpayPaymentId) {
        this.razorpayPaymentId = razorpayPaymentId;
    }

    @Generated
    public void setRazorpaySignature(final String razorpaySignature) {
        this.razorpaySignature = razorpaySignature;
    }

    @Generated
    public boolean equals(final Object o) {
        if (o == this) {
            return true;
        } else if (!(o instanceof PaymentVerificationRequest)) {
            return false;
        } else {
            PaymentVerificationRequest other = (PaymentVerificationRequest)o;
            if (!other.canEqual(this)) {
                return false;
            } else {
                Object this$razorpayOrderId = this.getRazorpayOrderId();
                Object other$razorpayOrderId = other.getRazorpayOrderId();
                if (this$razorpayOrderId == null) {
                    if (other$razorpayOrderId != null) {
                        return false;
                    }
                } else if (!this$razorpayOrderId.equals(other$razorpayOrderId)) {
                    return false;
                }

                Object this$razorpayPaymentId = this.getRazorpayPaymentId();
                Object other$razorpayPaymentId = other.getRazorpayPaymentId();
                if (this$razorpayPaymentId == null) {
                    if (other$razorpayPaymentId != null) {
                        return false;
                    }
                } else if (!this$razorpayPaymentId.equals(other$razorpayPaymentId)) {
                    return false;
                }

                Object this$razorpaySignature = this.getRazorpaySignature();
                Object other$razorpaySignature = other.getRazorpaySignature();
                if (this$razorpaySignature == null) {
                    if (other$razorpaySignature != null) {
                        return false;
                    }
                } else if (!this$razorpaySignature.equals(other$razorpaySignature)) {
                    return false;
                }

                return true;
            }
        }
    }

    @Generated
    protected boolean canEqual(final Object other) {
        return other instanceof PaymentVerificationRequest;
    }

    @Generated
    public int hashCode() {
        int PRIME = 59;
        int result = 1;
        Object $razorpayOrderId = this.getRazorpayOrderId();
        result = result * 59 + ($razorpayOrderId == null ? 43 : $razorpayOrderId.hashCode());
        Object $razorpayPaymentId = this.getRazorpayPaymentId();
        result = result * 59 + ($razorpayPaymentId == null ? 43 : $razorpayPaymentId.hashCode());
        Object $razorpaySignature = this.getRazorpaySignature();
        result = result * 59 + ($razorpaySignature == null ? 43 : $razorpaySignature.hashCode());
        return result;
    }

    @Generated
    public String toString() {
        String var10000 = this.getRazorpayOrderId();
        return "PaymentVerificationRequest(razorpayOrderId=" + var10000 + ", razorpayPaymentId=" + this.getRazorpayPaymentId() + ", razorpaySignature=" + this.getRazorpaySignature() + ")";
    }

    @Generated
    public PaymentVerificationRequest() {
    }

    @Generated
    public PaymentVerificationRequest(final String razorpayOrderId, final String razorpayPaymentId, final String razorpaySignature) {
        this.razorpayOrderId = razorpayOrderId;
        this.razorpayPaymentId = razorpayPaymentId;
        this.razorpaySignature = razorpaySignature;
    }
}
