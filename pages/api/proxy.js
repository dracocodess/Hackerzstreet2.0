export default function handler(req, res) {
    fetch("https://abh80.me/vault", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "VAULT_ADDR": "https://abh80.me/vault",
            "VAULT_TOKEN": process.env.VAULT_TOKEN,
            "ACCEPT": "application/json"
        },
        body: JSON.stringify({
            queryStr: "?utf8/hcp9//where//x=vault-not-my-stuff//x-hcp//prob_stat_link=is_present?->if(_true)=do{getVal()}=>write(__hcp_out)//as_string//using__hcp_out//end?",
            mem: "true",
            key: "prob_stat_link"

        })
    }).then(res => res.json()).then(data => {
        res.status(200).json(data);
    }).catch(_ => res.status(500).json({error: "Internal Server Error"}));
}