<div>
    <p>Screenshot this message or save this QR code and present it to the front-desk or guard-on-duty upon check-in and
        checkout.</p>
</div>
<div>
    <img src="https://api.qrserver.com/v1/create-qr-code/?data={{ $mailData['otp'] }}&size=200x200" width="240px"
        height="240px">
    {{-- <img src="https://proptech.globalland.com.ph/images/logo/logo_no_bg_2.png" alt="" width="240px"> --}}
    <p style="font-size: 14px; font-style: bold;">{{ $mailData['otp'] }}</p>
</div>
{{-- <div>
    <table>
        <tbody>
            <tr>
                <td>
                    <p style="margin: 0">Visitor Name: {{ $mailData['name'] }}</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p style="margin: 0">Contact Number: {{ $mailData['contact'] }}</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p style="margin: 0">Purpose of Visit: ???</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p style="margin: 0">Time of Visit: {{ $mailData['checkedIn'] }}</p>
                </td>
            </tr>
        </tbody>
    </table>
</div> --}}
{{-- <div style="margin-top: 32px">
    <a href="{{ config('app.url') }}/confirm-email?email={{ $mailData['email'] }}&otp={{ $mailData['password'] }}"
        target="_blank"
        style="padding: 10px 24px; background-color: slateblue; border-radius: 3px; text-decoration: none; color: white;">Click
        to Confirm</a>
</div> --}}
