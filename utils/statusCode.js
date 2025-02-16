export const statusUmum = {
  // Respons Berhasil (2xx)
  200: 'OK', // Request berhasil diproses
  201: 'Dibuat', // Data baru berhasil dibuat
  204: 'Tanpa Konten', // Request sukses, tapi tidak ada data yang dikembalikan

  // Pengalihan (3xx)
  301: 'Pindah Permanen', // URL telah dipindahkan secara permanen
  302: 'Ditemukan', // Redirect sementara
  304: 'Tidak Dimodifikasi', // Data masih valid di cache, tidak perlu unduh ulang

  // Kesalahan Klien (4xx)
  400: 'Permintaan Tidak Valid', // Request tidak sesuai format atau tidak valid
  401: 'Tidak Diotorisasi', // Belum login atau token tidak valid
  403: 'Dilarang', // Tidak punya izin akses
  404: 'Tidak Ditemukan', // Resource yang diminta tidak ada
  405: 'Metode Tidak Diizinkan', // Method HTTP tidak diperbolehkan
  429: 'Terlalu Banyak Permintaan', // Terlalu banyak request dalam waktu singkat

  // Kesalahan Server (5xx)
  500: 'Kesalahan Server Internal', // Error di server
  502: 'Gerbang Buruk', // Server menerima respon error dari server lain
  503: 'Layanan Tidak Tersedia', // Server sedang down atau sibuk
  504: 'Batas Waktu Gerbang', // Server menunggu terlalu lama dari server lain
};

const statusCode = {
  // Informational Responses (1xx)
  100: 'Continue', // Client should continue with request.
  101: 'Switching Protocols', // Server agrees to change the protocol.
  102: 'Processing', // Server has received request but is still processing it.
  103: 'Early Hints', // Provides preliminary response headers before final response.

  // Success Responses (2xx)
  200: 'OK', // Request succeeded, response contains the requested data.
  201: 'Created', // Request succeeded, and a new resource was created.
  202: 'Accepted', // Request has been received but not yet acted upon.
  203: 'Non-Authoritative Information', // Response is from a third-party source.
  204: 'No Content', // Request succeeded but no content to return.
  205: 'Reset Content', // Client should reset the document view.
  206: 'Partial Content', // Only part of the resource is returned (used for downloads).
  207: 'Multi-Status', // Multiple status codes for different operations (WebDAV).
  208: 'Already Reported', // Previously reported in a previous response (WebDAV).
  226: 'IM Used', // Server has fulfilled a request using delta encoding.

  // Redirection Messages (3xx)
  300: 'Multiple Choices', // Multiple options for the resource.
  301: 'Moved Permanently', // Resource has moved permanently to a new URL.
  302: 'Found', // Resource temporarily located at a different URL.
  303: 'See Other', // Redirect using GET method.
  304: 'Not Modified', // Cached version is still valid, no need to download again.
  305: 'Use Proxy', // Client must use a proxy (deprecated).
  306: 'Switch Proxy', // No longer used.
  307: 'Temporary Redirect', // Resource temporarily available at another URL, maintaining request method.
  308: 'Permanent Redirect', // Resource permanently available at another URL, maintaining request method.

  // Client Error Responses (4xx)
  400: 'Bad Request', // Invalid syntax in request.
  401: 'Unauthorized', // Authentication required.
  402: 'Payment Required', // Reserved for future use.
  403: 'Forbidden', // Access denied.
  404: 'Not Found', // Resource not found.
  405: 'Method Not Allowed', // HTTP method not allowed on this resource.
  406: 'Not Acceptable', // Cannot generate acceptable response based on headers.
  407: 'Proxy Authentication Required', // Authentication required via proxy.
  408: 'Request Timeout', // Request took too long, server closed connection.
  409: 'Conflict', // Conflict with current resource state.
  410: 'Gone', // Resource permanently removed.
  411: 'Length Required', // Content-Length header required.
  412: 'Precondition Failed', // Precondition in headers not met.
  413: 'Payload Too Large', // Request entity too large for the server.
  414: 'URI Too Long', // URL is too long.
  415: 'Unsupported Media Type', // Media type not supported.
  416: 'Range Not Satisfiable', // Cannot return requested range of resource.
  417: 'Expectation Failed', // Expectation in headers not met.
  418: "I'm a teapot", // Joke status code from HTCPCP protocol.
  421: 'Misdirected Request', // Request sent to wrong server.
  422: 'Unprocessable Entity', // Correct request but cannot be processed.
  423: 'Locked', // Resource is locked.
  424: 'Failed Dependency', // Previous request failed, so this one fails.
  425: 'Too Early', // Server refuses due to potential replay attack.
  426: 'Upgrade Required', // Client must switch to a different protocol.
  428: 'Precondition Required', // Request requires a condition (optimistic locking).
  429: 'Too Many Requests', // Too many requests sent in a given time (rate limiting).
  431: 'Request Header Fields Too Large', // Headers too large for server to process.
  451: 'Unavailable For Legal Reasons', // Content blocked due to legal reasons.

  // Server Error Responses (5xx)
  500: 'Internal Server Error', // Generic server error.
  501: 'Not Implemented', // Request method not supported.
  502: 'Bad Gateway', // Server received an invalid response from an upstream server.
  503: 'Service Unavailable', // Server is temporarily overloaded or under maintenance.
  504: 'Gateway Timeout', // Upstream server took too long to respond.
  505: 'HTTP Version Not Supported', // HTTP version used is not supported.
  506: 'Variant Also Negotiates', // Content negotiation resulted in a loop.
  507: 'Insufficient Storage', // Server lacks storage capacity.
  508: 'Loop Detected', // Infinite loop detected while processing request.
  510: 'Not Extended', // Further extensions are required to process the request.
  511: 'Network Authentication Required', // Client must authenticate to gain network access.
};

export default statusCode;

export const commonStatus = {
  // Success Responses (2xx)
  200: 'OK', // Request was successful
  201: 'Created', // A new resource was successfully created
  204: 'No Content', // Request succeeded but no response body

  // Redirection Messages (3xx)
  301: 'Moved Permanently', // The URL has permanently moved
  302: 'Found', // Temporary redirect
  304: 'Not Modified', // Cached data is still valid, no need to re-download

  // Client Error Responses (4xx)
  400: 'Bad Request', // Invalid request format or parameters
  401: 'Unauthorized', // Not logged in or invalid token
  403: 'Forbidden', // No permission to access the resource
  404: 'Not Found', // Requested resource does not exist
  405: 'Method Not Allowed', // HTTP method is not allowed
  429: 'Too Many Requests', // Too many requests in a short time

  // Server Error Responses (5xx)
  500: 'Internal Server Error', // Server encountered an error
  502: 'Bad Gateway', // Server received an error response from another server
  503: 'Service Unavailable', // Server is down or overloaded
  504: 'Gateway Timeout', // Server waited too long for a response from another server
};

export const statusCodeID = {
  // Respons Informasional (1xx)
  100: 'Lanjutkan', // Klien harus melanjutkan permintaan (biasanya digunakan untuk permintaan besar dengan header Expect: 100-continue).
  101: 'Beralih Protokol', // Server setuju untuk mengubah protokol sesuai permintaan klien.
  102: 'Sedang Diproses', // Server telah menerima permintaan, tetapi masih dalam proses (digunakan dalam WebDAV).
  103: 'Petunjuk Awal', // Memberikan header awal sebelum respons akhir (mempercepat rendering halaman).

  // Respons Berhasil (2xx)
  200: 'Berhasil', // Permintaan berhasil diproses dan respons diberikan.
  201: 'Dibuat', // Permintaan berhasil dan sumber daya baru telah dibuat (digunakan dalam POST atau PUT).
  202: 'Diterima', // Permintaan telah diterima tetapi belum diproses.
  203: 'Informasi Tidak Resmi', // Data yang diterima berasal dari cache atau sumber tidak resmi.
  204: 'Tanpa Konten', // Permintaan berhasil tetapi tidak ada data yang dikembalikan (misalnya DELETE tanpa respons).
  205: 'Reset Konten', // Klien harus mereset tampilan (digunakan untuk formulir).
  206: 'Sebagian Konten', // Hanya sebagian data yang dikirim (digunakan dalam download dengan range).
  207: 'Multi-Status', // Mengembalikan beberapa status dalam satu respons (digunakan dalam WebDAV).
  208: 'Sudah Dilaporkan', // Objek yang sama sudah dikirim dalam permintaan sebelumnya (WebDAV).
  226: 'IM Digunakan', // Server berhasil memproses permintaan dengan metode delta encoding.

  // Pesan Pengalihan (3xx)
  300: 'Pilihan Ganda', // Sumber daya memiliki beberapa opsi (klien bisa memilih salah satu).
  301: 'Pindah Permanen', // URL telah berpindah secara permanen (gunakan alamat baru).
  302: 'Ditemukan', // URL berpindah sementara, gunakan alamat lama untuk masa depan.
  303: 'Lihat yang Lain', // Gunakan metode GET untuk mengambil sumber daya baru.
  304: 'Tidak Dimodifikasi', // Data di cache masih berlaku, tidak perlu mengunduh ulang.
  305: 'Gunakan Proksi', // Klien harus mengakses sumber daya melalui proxy tertentu (tidak digunakan lagi).
  306: 'Ganti Proksi', // Dulu digunakan untuk mengganti proxy, tetapi sekarang tidak dipakai.
  307: 'Pengalihan Sementara', // Sama seperti 302 tetapi mempertahankan metode permintaan asli.
  308: 'Pengalihan Permanen', // Sama seperti 301 tetapi mempertahankan metode permintaan asli.

  // Respons Kesalahan Klien (4xx)
  400: 'Permintaan Tidak Valid', // Permintaan tidak sesuai format atau sintaksis salah.
  401: 'Tidak Diotorisasi', // Autentikasi diperlukan tetapi belum diberikan atau gagal.
  402: 'Pembayaran Diperlukan', // Belum digunakan secara luas, awalnya untuk transaksi digital.
  403: 'Dilarang', // Klien tidak memiliki izin untuk mengakses sumber daya.
  404: 'Tidak Ditemukan', // Sumber daya tidak ditemukan di server.
  405: 'Metode Tidak Diizinkan', // Metode HTTP yang digunakan tidak diizinkan untuk sumber daya.
  406: 'Tidak Dapat Diterima', // Server tidak dapat menyediakan format yang diminta klien.
  407: 'Otentikasi Proksi Diperlukan', // Sama seperti 401 tetapi untuk otentikasi proxy.
  408: 'Batas Waktu Permintaan', // Permintaan klien terlalu lama sehingga server menutup koneksi.
  409: 'Konflik', // Terjadi konflik pada sumber daya (misalnya, pengeditan bersamaan).
  410: 'Hilang', // Sumber daya pernah ada tetapi sudah dihapus secara permanen.
  411: 'Content-Length Diperlukan', // Klien harus menyertakan header Content-Length.
  412: 'Prasyarat Gagal', // Prasyarat dalam header permintaan tidak terpenuhi.
  413: 'Muatan Terlalu Besar', // Ukuran permintaan terlalu besar untuk diproses.
  414: 'URL Terlalu Panjang', // URL yang diminta terlalu panjang untuk diproses.
  415: 'Tipe Media Tidak Didukung', // Format data tidak didukung oleh server.
  416: 'Rentang Tidak Dapat Dipenuhi', // Rentang byte dalam permintaan tidak valid.
  417: 'Ekspektasi Gagal', // Server tidak dapat memenuhi header Expect dalam permintaan.
  418: 'Saya Sebuah Teko', // Kode lelucon dari protokol HTCPCP (bukan untuk penggunaan nyata).
  421: 'Permintaan Salah Arah', // Permintaan dikirim ke server yang salah.
  422: 'Entitas Tidak Dapat Diproses', // Permintaan benar tetapi tidak bisa diproses (sering dipakai di API).
  423: 'Terkunci', // Sumber daya dikunci dan tidak dapat diakses.
  424: 'Ketergantungan Gagal', // Permintaan gagal karena tergantung pada permintaan lain yang gagal.
  425: 'Terlalu Dini', // Server menolak karena takut replay attack.
  426: 'Peningkatan Diperlukan', // Klien harus meningkatkan ke protokol yang lebih baru.
  428: 'Prasyarat Diperlukan', // Permintaan memerlukan kondisi tambahan (digunakan dalam pengeditan data bersamaan).
  429: 'Terlalu Banyak Permintaan', // Klien mengirim terlalu banyak permintaan dalam waktu singkat (rate limiting).
  431: 'Bidang Header Permintaan Terlalu Besar', // Header permintaan terlalu panjang untuk diproses.
  451: 'Tidak Tersedia Karena Alasan Hukum', // Konten diblokir karena alasan hukum.

  // Respons Kesalahan Server (5xx)
  500: 'Kesalahan Server Internal', // Terjadi kesalahan umum pada server.
  501: 'Belum Diimplementasikan', // Server tidak mendukung metode permintaan.
  502: 'Gerbang Buruk', // Server bertindak sebagai gateway dan menerima respons tidak valid.
  503: 'Layanan Tidak Tersedia', // Server sedang dalam perawatan atau terlalu sibuk.
  504: 'Batas Waktu Gerbang', // Server tidak mendapatkan respons dari server lain dalam waktu yang cukup.
  505: 'Versi HTTP Tidak Didukung', // Versi HTTP yang digunakan tidak didukung oleh server.
  506: 'Varian Juga Bernegosiasi', // Kesalahan konfigurasi server menyebabkan loop negosiasi konten.
  507: 'Penyimpanan Tidak Cukup', // Server tidak memiliki ruang penyimpanan yang cukup.
  508: 'Loop Terdeteksi', // Server mendeteksi loop tak terbatas saat memproses permintaan.
  510: 'Tidak Diperpanjang', // Ekstensi tambahan diperlukan agar permintaan bisa diproses.
  511: 'Otentikasi Jaringan Diperlukan', // Klien harus masuk ke jaringan terlebih dahulu (misalnya captive portal Wi-Fi).
};
