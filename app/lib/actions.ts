'use server'

export async function createInvoice(formData: FormData) {
    // console.log('createInvoce', formData);
    const rawFormData = {
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    }

    console.log('rawFormData', rawFormData);
}