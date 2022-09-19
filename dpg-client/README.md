# dpg-client Helm Repo

### The helm chart to automate the deployment of dpgraham.com's back end go server

```
# notes for me:
# if I install with release name foo (helm install . foo)
{{ include "dpg-client.fullname" . }} # evaluates to foo-dpg-client (where "dpg-client" comes from the chart.yaml name)

{{- include "dpg-client.labels" . | nindent 4 }} # adds a bunch of labels like
#  app.kubernetes.io/instance=foo
#  app.kubernetes.io/managed-by=Helm
#  app.kubernetes.io/name=dpg-client
#  app.kubernetes.io/version=0.0.3
#  helm.sh/chart=dpg-client-0.0.3

```

