function openModal(id) { document.getElementById(id).classList.add('active'); }
        function closeModal(id) { document.getElementById(id).classList.remove('active'); }

        document.addEventListener('DOMContentLoaded', () => {
            const qrBox = document.getElementById("qrcode");
            if(qrBox) {
                new QRCode(qrBox, {
                    text: window.location.href,
                    width: 130,
                    height: 130,
                    colorDark : "#1d4ed8",
                    colorLight : "#ffffff"
                });
            }

            const toast = document.getElementById('toast');
            const showToast = (msg) => {
                toast.textContent = msg;
                toast.style.display = 'block';
                setTimeout(() => toast.style.display = 'none', 2200);
            };

            document.getElementById('btn-vcard').addEventListener('click', () => {
                const vCardData = `BEGIN:VCARD\nVERSION:3.0\nFN:David Andrés Gutiérrez\nORG:Consultoría Agropecuaria\nTITLE:Administrador de Empresas Agropecuarias\nTEL;TYPE=CELL:+573206425826\nEMAIL:davidandresgutierrez@gmail.com\nADR;TYPE=WORK:;;Carrera 43 No. 10 - 47;Medellin;;;Colombia\nNOTE:Especialista en Ventas y Avalúos de fincas y predios rurales.\nEND:VCARD`;
                const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'David_Andres_Gutierrez.vcf';
                a.click();
                URL.revokeObjectURL(url);
                showToast('Contacto guardado en agenda');
            });
        });
